using System.Collections.Generic;

namespace MatchPoint.Web.Models
{
    public interface IOrganisationUnitRepository
    {
        List<OrganisationUnit> GetOrganisationUnitData();
    }
}