using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ExceptionHandling;
using NLog;
namespace MatchPoint.Web.Models
{
    public class UnhandledExceptionLogger : ExceptionLogger
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public override void Log(ExceptionLoggerContext context)
        {
            var log = context.Exception.ToString();


            logger.Error(log);

            //Do whatever logging need to do here.
        }
    }
}