using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Http;
using System.Net.Http;
using Newtonsoft.Json;
using System.Web.Script.Serialization;

namespace MatchPoint.Web.Controllers
{
    [RoutePrefix("LoginAPI")]
    public class LoginController : ApiController
    {
        [Route("Login")]
        [HttpPost]
        [AllowAnonymous]
        public HttpResponseMessage Login(Object loginCredential)
        {
            LoginCredential objLoginCredential = JsonConvert.DeserializeObject<LoginCredential>(loginCredential.ToString());

            int id;
            string userName = string.Empty;
            string userRoles = string.Empty;
            string token = string.Empty;


            if (objLoginCredential.LoginName == "patientuser") {
                id = 1;
                userName = "patient user";
                userRoles = "patientRole";
            } else if (objLoginCredential.LoginName == "donoruser") {
                id = 2;
                userName = "donor user";
                userRoles = "donorRole";
            } else {
                id = 3;
                userName = "other user";
                userRoles = "allRole";                
            }

            token = "RURDXEFkbWluaXN0cmF0b3I6UGFzc3dvcmQ=";

            LoginResult loginResult = new LoginResult
            {
                LoginName = objLoginCredential.LoginName,
                Id = id,
                UserName = userName,
                Roles = userRoles,
                Token = token
            };

            string json = JsonConvert.SerializeObject(loginResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }
    }

    public class LoginCredential
    {
        public LoginCredential() { }

        public string LoginName { get; set; }

        public string Password { get; set; }
    }

    public class LoginResult
    {
        public LoginResult() { }

        public int Id { get; set; }

        public string LoginName {get; set;}

        public string UserName { get; set; }

        public string Roles { get; set; }

        public string Token { get; set; }

    }
}
