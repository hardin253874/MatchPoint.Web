using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MatchPoint.Web.Models
{
    //Todo: Move repositories to another proj
    public class OrganisationUnitRepository : IOrganisationUnitRepository
    {
        public List<OrganisationUnit> GetOrganisationUnitData()
        {
            var data = new List<OrganisationUnit>()
            {
                new OrganisationUnit { Id = 1, Name = "Children''s Hospital at Westmead", Alias = "C,H,West", IsGovernedBy = "ABMDR", ShortDescription = "Westmead", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "12345", FaxCountryId = +61, FaxNumber = "9090909", email = "aa@jj.com", WebSite= "www.jj.com", OfficeHours = "9-5" },
                new OrganisationUnit { Id = 2, Name = "Royal North Shore Hospital", Alias = "R, North, Shore", IsGovernedBy = "ABMDR", ShortDescription = "North", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "453512345", FaxCountryId = +61, FaxNumber = "9454509", email = "xx@aa.com", WebSite= "www.aa.com", OfficeHours = "9-5"  },
                new OrganisationUnit { Id = 3, Name = "Royal Prince Alfred Hospita", Alias = "prince, Alfred", IsGovernedBy = "CBB", ShortDescription = "Alfred", Country="Poland", TelephoneCountryId = +00, TelephoneNumber = "124444345", FaxCountryId = +61, FaxNumber = "865412309", email = "pp@jj.po.co", WebSite= "www.jj.po.co", OfficeHours = "9-5"  },
                 new OrganisationUnit { Id = 1, Name = "Children''s Hospital at Westmead", Alias = "C,H,West", IsGovernedBy = "ABMDR", ShortDescription = "Westmead", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "12345", FaxCountryId = +61, FaxNumber = "9090909", email = "aa@jj.com", WebSite= "www.jj.com", OfficeHours = "9-5" },
                new OrganisationUnit { Id = 2, Name = "Royal North Shore Hospital", Alias = "R, North, Shore", IsGovernedBy = "ABMDR", ShortDescription = "North", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "453512345", FaxCountryId = +61, FaxNumber = "9454509", email = "xx@aa.com", WebSite= "www.aa.com", OfficeHours = "9-5"  },
                new OrganisationUnit { Id = 3, Name = "Royal Prince Alfred Hospita", Alias = "prince, Alfred", IsGovernedBy = "CBB", ShortDescription = "Alfred", Country="Poland", TelephoneCountryId = +00, TelephoneNumber = "124444345", FaxCountryId = +61, FaxNumber = "865412309", email = "pp@jj.po.co", WebSite= "www.jj.po.co", OfficeHours = "9-5"  },
                 new OrganisationUnit { Id = 1, Name = "Children''s Hospital at Westmead", Alias = "C,H,West", IsGovernedBy = "ABMDR", ShortDescription = "Westmead", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "12345", FaxCountryId = +61, FaxNumber = "9090909", email = "aa@jj.com", WebSite= "www.jj.com", OfficeHours = "9-5" },
                new OrganisationUnit { Id = 2, Name = "Royal North Shore Hospital", Alias = "R, North, Shore", IsGovernedBy = "ABMDR", ShortDescription = "North", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "453512345", FaxCountryId = +61, FaxNumber = "9454509", email = "xx@aa.com", WebSite= "www.aa.com", OfficeHours = "9-5"  },
                new OrganisationUnit { Id = 3, Name = "Royal Prince Alfred Hospita", Alias = "prince, Alfred", IsGovernedBy = "CBB", ShortDescription = "Alfred", Country="Poland", TelephoneCountryId = +00, TelephoneNumber = "124444345", FaxCountryId = +61, FaxNumber = "865412309", email = "pp@jj.po.co", WebSite= "www.jj.po.co", OfficeHours = "9-5"  },
                 new OrganisationUnit { Id = 1, Name = "Children''s Hospital at Westmead", Alias = "C,H,West", IsGovernedBy = "ABMDR", ShortDescription = "Westmead", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "12345", FaxCountryId = +61, FaxNumber = "9090909", email = "aa@jj.com", WebSite= "www.jj.com", OfficeHours = "9-5" },
                new OrganisationUnit { Id = 2, Name = "Royal North Shore Hospital", Alias = "R, North, Shore", IsGovernedBy = "ABMDR", ShortDescription = "North", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "453512345", FaxCountryId = +61, FaxNumber = "9454509", email = "xx@aa.com", WebSite= "www.aa.com", OfficeHours = "9-5"  },
                new OrganisationUnit { Id = 3, Name = "Royal Prince Alfred Hospita", Alias = "prince, Alfred", IsGovernedBy = "CBB", ShortDescription = "Alfred", Country="Poland", TelephoneCountryId = +00, TelephoneNumber = "124444345", FaxCountryId = +61, FaxNumber = "865412309", email = "pp@jj.po.co", WebSite= "www.jj.po.co", OfficeHours = "9-5"  },
                 new OrganisationUnit { Id = 1, Name = "Children''s Hospital at Westmead", Alias = "C,H,West", IsGovernedBy = "ABMDR", ShortDescription = "Westmead", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "12345", FaxCountryId = +61, FaxNumber = "9090909", email = "aa@jj.com", WebSite= "www.jj.com", OfficeHours = "9-5" },
                new OrganisationUnit { Id = 2, Name = "Royal North Shore Hospital", Alias = "R, North, Shore", IsGovernedBy = "ABMDR", ShortDescription = "North", Country="Australia", TelephoneCountryId = +61, TelephoneNumber = "453512345", FaxCountryId = +61, FaxNumber = "9454509", email = "xx@aa.com", WebSite= "www.aa.com", OfficeHours = "9-5"  },
                new OrganisationUnit { Id = 3, Name = "Royal Prince Alfred Hospita", Alias = "prince, Alfred", IsGovernedBy = "CBB", ShortDescription = "Alfred", Country="Poland", TelephoneCountryId = +00, TelephoneNumber = "124444345", FaxCountryId = +61, FaxNumber = "865412309", email = "pp@jj.po.co", WebSite= "www.jj.po.co", OfficeHours = "9-5"  }
            };


            return data;
        }
    }
}