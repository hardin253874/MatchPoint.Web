using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using MatchPoint.Web.Models;
using MatchPoint.Web.Filters;
using NLog;
namespace MatchPoint.Web.Providers
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly string _publicClientId;
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public ApplicationOAuthProvider(string publicClientId)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException("publicClientId");
            }

            _publicClientId = publicClientId;
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            try
            {
                //var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();
                var userManager = context.OwinContext.GetUserManager<CustomUserManager>();

                //ApplicationUser user = await userManager.FindAsync(context.UserName, context.Password);
                AppUser user = await userManager.FindAsync(context.UserName, context.Password);
                if (user == null)
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                    logger.Error(string.Format("The user name or password is incorrect by account {0}", user.UserName));
                    return;
                }


                logger.Info(string.Format("The user {0} successed login to system.", user.UserName));
                ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(userManager,
                   OAuthDefaults.AuthenticationType);
                ClaimsIdentity cookiesIdentity = await user.GenerateUserIdentityAsync(userManager,
                    CookieAuthenticationDefaults.AuthenticationType);

                AuthenticationProperties properties = CreateProperties(user.UserName);
                AuthenticationTicket ticket = new AuthenticationTicket(oAuthIdentity, properties);
                context.Validated(ticket);
                context.Request.Context.Authentication.SignIn(cookiesIdentity);
            }
            catch(Exception ex)
            {
                if (ex != null)
                {
                    throw new NotImplementedException("The user name or password is incorrect.");
                }
            }
            
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            if (!string.IsNullOrEmpty(context.OwinContext.Request.Headers.Get("Origin")))
            {
                context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new string[] { "*" });
            }
            try
            {
                // retrieve clientId and clientSecret from request body
                string clientId;
                string clientSecret;
                if (context.TryGetFormCredentials(out clientId, out clientSecret))
                {
                    // here it comes our application specific security code....
                }
                else
                {
                    // this is part of enabling CORS..
                    if (context.Request.Method.ToUpper() == "OPTIONS")
                    {
                        // it returns OK to preflight requests having an empty body
                        context.Validated();
                    }
                    if (context.ClientId == null)
                    {
                        context.Validated();
                    }
                }
            }
            finally
            {
                // log stuff...
            }



            //// Resource owner password credentials does not provide a client ID.
            //if (context.ClientId == null)
            //{
            //    context.Validated();
            //}

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientRedirectUri(OAuthValidateClientRedirectUriContext context)
        {
            if (context.ClientId == _publicClientId)
            {
                Uri expectedRootUri = new Uri(context.Request.Uri, "/");

                if (expectedRootUri.AbsoluteUri == context.RedirectUri)
                {
                    context.Validated();
                }
            }

            return Task.FromResult<object>(null);
        }

        public static AuthenticationProperties CreateProperties(string userName)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", userName }
            };
            return new AuthenticationProperties(data);
        }

        public override Task MatchEndpoint(OAuthMatchEndpointContext context)
        {
            if (context.IsTokenEndpoint && context.Request.Method == "OPTIONS")
            {
                //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
                //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Headers", new[] { "authorization" });
                //context.RequestCompleted();
                //return Task.FromResult(0);

                if (!context.OwinContext.Response.Headers.Keys.Contains("Access-Control-Allow-Origin"))
                    context.OwinContext.Response.Headers.AppendCommaSeparatedValues("Access-Control-Allow-Origin", new[] { "*" });

                if (!context.OwinContext.Response.Headers.Keys.Contains("Access-Control-Allow-Headers"))
                    context.OwinContext.Response.Headers.AppendCommaSeparatedValues("Access-Control-Allow-Headers", new[] { "Accept", "Content-Type", "Authorization", "Cache-Control", "Pragma", "Origin" });
                if (!context.OwinContext.Response.Headers.Keys.Contains("Access-Control-Allow-Methods"))
                    context.OwinContext.Response.Headers.AppendCommaSeparatedValues("Access-Control-Allow-Methods", new[] { "GET", "POST", "PUT", "DELETE", "OPTIONS" });
                context.MatchesTokenEndpoint();
                context.RequestCompleted();
                return Task.FromResult<object>(null);

            }

            return base.MatchEndpoint(context);
        }
    }
}