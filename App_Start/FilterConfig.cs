using System.Web;
using System.Web.Mvc;
using MatchPoint.Web.Filters;
namespace MatchPoint.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());            
            //add exception filter in webapiconfig.cs
            //filters.Add(new NotImplExceptionFilterAttribute());
            //discuss later
            //filters.Add(new RequireHttpsAttribute());
        }
    }
}