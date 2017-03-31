
using System.Collections.Generic;

namespace MatchPoint.Web.Models
{
    public class ErrorResult
    {
        public string Status { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }


    }
}