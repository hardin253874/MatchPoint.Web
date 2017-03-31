using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Owin.Security.OAuth;
namespace MatchPoint.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
            name: "HomeCatchAllRoute",
            url: "Home/{*.}",
            defaults: new
            {
                controller = "Home",
                action = "Index",
                id = UrlParameter.Optional
            }
        );

            routes.MapRoute(
            name: "LoginCatchAllRoute",
            url: "Login/{*.}",
            defaults: new
            {
                controller = "Home",
                action = "Index",
                id = UrlParameter.Optional
            }
        );

            routes.MapRoute(
            name: "OrganisationUnitCatchAllRoute",
            url: "OrganisationUnits/{*.}",
            defaults: new
            {
                controller = "Home",
                action = "Index",
                id = UrlParameter.Optional
            }
        );





           routes.MapRoute(
           name: "patientsCatchAllRoute",
           url: "patients/{*.}",
           defaults: new
           {
               controller = "Home",
               action = "Index",
               id = UrlParameter.Optional
           }
       );



           routes.MapRoute(
           name: "patientTabDetailCatchAllRoute",
           url: "patientTabDetail/{*.}",
           defaults: new
           {
               controller = "Home",
               action = "Index",
               id = UrlParameter.Optional
           }
       );


           routes.MapRoute(
           name: "DonorCatchAllRoute",
           url: "Donors/{*.}",
           defaults: new
           {
               controller = "Home",
               action = "Index",
               id = UrlParameter.Optional
           }
       );





            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }

       
    }
}
