using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MatchPoint.Web.Models
{
    public class OrganisationUnit
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Alias { get; set; }
        public bool IsDeleted { get; set; }
        public string TelephoneNumber { get; set; }
        public string FaxNumber { get; set; }
        public string email { get; set; }
        public string WebSite { get; set; }
        public string OfficeHours { get; set; }
        public DateTimeOffset? CloseDate { get; set; }
        public int AddedByUserID { get; set; }
        public DateTimeOffset AddedDateTime { get; set; }
        public int? TelephoneCountryId { get; set; }
        public int? FaxCountryId { get; set; }
        [Required]
        public string IsGovernedBy { get; set; }
        public bool IsActive { get; set; }
        public string Country { get; set; }
        public string ShortDescription { get; set; }
        public string RegistryCode { get; set; }
        public string CustomerAccountingCode { get; set; }
        public bool? BillingCustomer { get; set; }
        public string NavisionRefNo { get; set; }
        public string NAVVendorNo { get; set; }

       



    }

    public class OrganisationUnitsData : PagedListResult
    {
        public List<OrganisationUnit> GridData { get; set; }

    }

    public class OrganisationUnitAliasData : PagedListResult
    {
        public int Id { get; set; }

        public List<OrganisationUnitAlias> GridData { get; set; }

        public OrganisationUnitAliasData()
        {
            GridData = new List<OrganisationUnitAlias>()
            {  new OrganisationUnitAlias {Name = "aaaa" },
               new OrganisationUnitAlias {Name = "bbbb" },
                 new OrganisationUnitAlias {Name = "cccc" },
                   new OrganisationUnitAlias {Name = "dsddd" },
                     new OrganisationUnitAlias {Name = "eeeee" },

            };
        }
    }

    public class OrganisationUnitAlias
    {
        public string Name { get; set; }
    }
}