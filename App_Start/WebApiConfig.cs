using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using MatchPoint.Web.Filters;
using MatchPoint.Web.Models;
using System.Web.Http.ExceptionHandling;

namespace MatchPoint.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Services.Add(typeof(IExceptionLogger), new UnhandledExceptionLogger());

            config.Filters.Add(new NotImplExceptionFilterAttribute());

            // Enforce HTTPS
            //config.Filters.Add(new MatchPoint.Web.Filters.RequireHttpsAttribute());
        }

       

    }
}
