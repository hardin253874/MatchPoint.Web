using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;

namespace MatchPoint.Web.Controllers
{
    [RoutePrefix("OrgUnitRepRolesAPI")]
    public class OrgUnitRepRoleController : ApiController
    {

        List<OrgUnitRepRole> orgUnitRepRoles = new List<OrgUnitRepRole>();        
        List<OrganizationUnitType> lstOrganizationUnitType = new List<OrganizationUnitType>();
        List<UserRepresentativeRole> lstUserRepresentativeRole = new List<UserRepresentativeRole>();

        OrgUnitRepRole orgUnitCreateRole = new OrgUnitRepRole();

        [Route("GetOrgUnitRepRoles")]
        [HttpPost]
        public HttpResponseMessage GetOrgUnitRepresentativeRoles(Object gridOptions)
        {
            List<OrgUnitRepRole> pagedOrgUnitRepRole = new List<OrgUnitRepRole>();

            InitializeData(); //Initialize Data

            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<OrgUnitRepRole> filteredOrgUnitRepRole = orgUnitRepRoles.Where(u => u.RoleName.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredOrgUnitRepRole = filteredOrgUnitRepRole.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredOrgUnitRepRole = filteredOrgUnitRepRole.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            int totalItem = filteredOrgUnitRepRole.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;
            pagedOrgUnitRepRole = filteredOrgUnitRepRole.GetRange(startIndex, size);
            
            if (filteredOrgUnitRepRole.Count > size)
                pagedOrgUnitRepRole = filteredOrgUnitRepRole.GetRange(startIndex, size);
            else
                pagedOrgUnitRepRole = filteredOrgUnitRepRole;


            OrgUnitRepRolesResult organizationUnitsResult = new OrgUnitRepRolesResult
            {
                Status = "Success",
                Message = "Get Organization Units",
                GridData = pagedOrgUnitRepRole,
                TotalItems = totalItem
            };

            string json = JsonConvert.SerializeObject(organizationUnitsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }
        
        [Route("GetOrgUnitRepRolesDetail")]
        [HttpPost]
        public HttpResponseMessage GetOrgUnitRepRolesDetail(Object orgUnitRole)
        {
            InitializeData(); //Initialize Data           

            OrgUnitRepRole orgUnitRepRole = orgUnitRepRoles.Where(u => u.Id == Convert.ToInt32(orgUnitRole)).FirstOrDefault();

            OrgUnitRepRoleDetailsResult orgUnitRepRoleDetailsResult = new OrgUnitRepRoleDetailsResult
            {
                Status = "Success",
                Message = "Get Organization Units",
                Data = orgUnitRepRole
            };

            string json = JsonConvert.SerializeObject(orgUnitRepRoleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("UpdateOrgUnitRepRolesDetail")]
        [HttpPost]
        public HttpResponseMessage UpdateOrgUnitRepRolesDetail(Object orgUnitRole)
        {
            // Update Data - logic - should be modified accordingly
          
            OrgUnitRepRoleDetailsResult orgUnitRepRoleDetailsResult = new OrgUnitRepRoleDetailsResult
            {
                Status = "Success",
                Message = "Get Organization Unit Representative Roles",
                Data = null               
            };

            string json = JsonConvert.SerializeObject(orgUnitRepRoleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };
        }


        [Route("CreateOrgUnitRepRole")]
        [HttpPost]
        public HttpResponseMessage CreateOrgUnitRepRole()
        {
            // Create Data - logic - should be modified accordingly     

            OrgUnitRepRoleDetailsResult orgUnitRepRoleDetailsResult = new OrgUnitRepRoleDetailsResult
            {
                Status = "Success",
                Message = "Get Organization Units",
                Data = null
            };

            string json = JsonConvert.SerializeObject(orgUnitRepRoleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }


        [Route("LoadOrgUnitRepRoleValues")]
        [HttpPost]
        public HttpResponseMessage LoadOrgUnitRepRoleValues()
        {
            InitializeRoleData(); //Initialize Data           

            OrgUnitRepRoleDetailsResult orgUnitRepRoleDetailsResult = new OrgUnitRepRoleDetailsResult
            {
                Status = "Success",
                Message = "Get Organization Units",
                Data = orgUnitCreateRole
            };

            string json = JsonConvert.SerializeObject(orgUnitRepRoleDetailsResult);

            return new HttpResponseMessage
            {
                Content = new StringContent(json)
            };

        }



        public void InitializeData()
        {
            List<UserRepresentativeRole> objUserRole1 = new List<UserRepresentativeRole>();
            objUserRole1.Add(new UserRepresentativeRole("Administrator", true));
            objUserRole1.Add(new UserRepresentativeRole("AddDonorBloodGroupfromafile", true));
            objUserRole1.Add(new UserRepresentativeRole("AddDonorsfromafile", true));
            objUserRole1.Add(new UserRepresentativeRole("CBBReviewer", true));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole1.Add(new UserRepresentativeRole("CBUReports", false));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorAddresses", true));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorContacts", true));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorDetails", true));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorPerson", true));
            objUserRole1.Add(new UserRepresentativeRole("CloseAccreditationCertificationStandard", true));
            objUserRole1.Add(new UserRepresentativeRole("CloseOrgUnit", true));
            objUserRole1.Add(new UserRepresentativeRole("CloseRegistrationStandard", false));
            objUserRole1.Add(new UserRepresentativeRole("CompleteRequest", false));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", true));
            List<OrganizationUnitType> objOrgUnitType1 = new List<OrganizationUnitType>();
            objOrgUnitType1.Add(new OrganizationUnitType("Apheresis Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Bone Marrow Collection Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("CBB", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Collection Location", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Cord Blood Collection Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Cord Registry", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Donor Centre", true));
            objOrgUnitType1.Add(new OrganizationUnitType("Donor Registry", true));
            objOrgUnitType1.Add(new OrganizationUnitType("Independent CBB", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Independent Transplant Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Other Testing Laboratory", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Referring Hospital", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Search Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Search Registry", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Testing Laboratory", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Tissue Typing Laboratory", false));
            OrgUnitRepRole objUserOrgUnitRepRole1 = new OrgUnitRepRole();
            objUserOrgUnitRepRole1.Id = 1;
            objUserOrgUnitRepRole1.RoleName = "Accounts Clerk";
            objUserOrgUnitRepRole1.UserRoles = objUserRole1;
            objUserOrgUnitRepRole1.OrganizationUnitTypes = objOrgUnitType1;
            objUserOrgUnitRepRole1.IsActive = true;
            orgUnitRepRoles.Add(objUserOrgUnitRepRole1);  //#Item1


            List<UserRepresentativeRole> objUserRole2 = new List<UserRepresentativeRole>();
            objUserRole2.Add(new UserRepresentativeRole("Administrator", true));
            objUserRole2.Add(new UserRepresentativeRole("AddDonorBloodGroupfromafile", true));
            objUserRole2.Add(new UserRepresentativeRole("AddDonorsfromafile", true));
            objUserRole2.Add(new UserRepresentativeRole("CBBReviewer", true));
            objUserRole2.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole2.Add(new UserRepresentativeRole("CBUReports", false));
            objUserRole2.Add(new UserRepresentativeRole("ChangeDonorAddresses", true));
            objUserRole2.Add(new UserRepresentativeRole("ChangeDonorContacts", true));
            objUserRole2.Add(new UserRepresentativeRole("ChangeDonorDetails", true));
            objUserRole2.Add(new UserRepresentativeRole("ChangeDonorPerson", true));
            objUserRole2.Add(new UserRepresentativeRole("CloseAccreditationCertificationStandard", true));
            objUserRole2.Add(new UserRepresentativeRole("CloseOrgUnit", true));
            objUserRole2.Add(new UserRepresentativeRole("CloseRegistrationStandard", false));
            objUserRole2.Add(new UserRepresentativeRole("CompleteRequest", false));
            objUserRole2.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole2.Add(new UserRepresentativeRole("CancelRequest", true));
            List<OrganizationUnitType> objOrgUnitType2 = new List<OrganizationUnitType>();
            objOrgUnitType2.Add(new OrganizationUnitType("Apheresis Centre", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Bone Marrow Collection Centre", false));
            objOrgUnitType2.Add(new OrganizationUnitType("CBB", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Collection Location", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Cord Blood Collection Centre", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Cord Registry", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Donor Centre", true));
            objOrgUnitType2.Add(new OrganizationUnitType("Donor Registry", true));
            objOrgUnitType2.Add(new OrganizationUnitType("Independent CBB", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Independent Transplant Centre", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Other Testing Laboratory", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Referring Hospital", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Search Centre", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Search Registry", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Testing Laboratory", false));
            objOrgUnitType2.Add(new OrganizationUnitType("Tissue Typing Laboratory", false));
            OrgUnitRepRole objUserOrgUnitRepRole2 = new OrgUnitRepRole();
            objUserOrgUnitRepRole2.Id = 2;
            objUserOrgUnitRepRole2.RoleName = "Directory";
            objUserOrgUnitRepRole2.UserRoles = objUserRole2;
            objUserOrgUnitRepRole2.OrganizationUnitTypes = objOrgUnitType2;
            objUserOrgUnitRepRole2.IsActive = true;
            orgUnitRepRoles.Add(objUserOrgUnitRepRole2);  //#Item2


            List<UserRepresentativeRole> objUserRole3 = new List<UserRepresentativeRole>();
            objUserRole3.Add(new UserRepresentativeRole("Administrator", true));
            objUserRole3.Add(new UserRepresentativeRole("AddDonorBloodGroupfromafile", true));
            objUserRole3.Add(new UserRepresentativeRole("AddDonorsfromafile", true));
            objUserRole3.Add(new UserRepresentativeRole("CBBReviewer", true));
            objUserRole3.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole3.Add(new UserRepresentativeRole("CBUReports", false));
            objUserRole3.Add(new UserRepresentativeRole("ChangeDonorAddresses", true));
            objUserRole3.Add(new UserRepresentativeRole("ChangeDonorContacts", true));
            objUserRole3.Add(new UserRepresentativeRole("ChangeDonorDetails", true));
            objUserRole3.Add(new UserRepresentativeRole("ChangeDonorPerson", true));
            objUserRole3.Add(new UserRepresentativeRole("CloseAccreditationCertificationStandard", true));
            objUserRole3.Add(new UserRepresentativeRole("CloseOrgUnit", true));
            objUserRole3.Add(new UserRepresentativeRole("CloseRegistrationStandard", false));
            objUserRole3.Add(new UserRepresentativeRole("CompleteRequest", false));
            objUserRole3.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole3.Add(new UserRepresentativeRole("CancelRequest", true));
            List<OrganizationUnitType> objOrgUnitType3 = new List<OrganizationUnitType>();
            objOrgUnitType3.Add(new OrganizationUnitType("Apheresis Centre", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Bone Marrow Collection Centre", false));
            objOrgUnitType3.Add(new OrganizationUnitType("CBB", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Collection Location", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Cord Blood Collection Centre", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Cord Registry", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Donor Centre", true));
            objOrgUnitType3.Add(new OrganizationUnitType("Donor Registry", true));
            objOrgUnitType3.Add(new OrganizationUnitType("Independent CBB", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Independent Transplant Centre", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Other Testing Laboratory", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Referring Hospital", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Search Centre", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Search Registry", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Testing Laboratory", false));
            objOrgUnitType3.Add(new OrganizationUnitType("Tissue Typing Laboratory", false));
            OrgUnitRepRole objUserOrgUnitRepRole3 = new OrgUnitRepRole();
            objUserOrgUnitRepRole3.Id = 3;
            objUserOrgUnitRepRole3.RoleName = "Co ordinator";
            objUserOrgUnitRepRole3.UserRoles = objUserRole3;
            objUserOrgUnitRepRole3.OrganizationUnitTypes = objOrgUnitType3;
            objUserOrgUnitRepRole3.IsActive = true;
            orgUnitRepRoles.Add(objUserOrgUnitRepRole3);  //#Item3


            List<UserRepresentativeRole> objUserRole4 = new List<UserRepresentativeRole>();
            objUserRole4.Add(new UserRepresentativeRole("Administrator", true));
            objUserRole4.Add(new UserRepresentativeRole("AddDonorBloodGroupfromafile", true));
            objUserRole4.Add(new UserRepresentativeRole("AddDonorsfromafile", true));
            objUserRole4.Add(new UserRepresentativeRole("CBBReviewer", true));
            objUserRole4.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole4.Add(new UserRepresentativeRole("CBUReports", false));
            objUserRole4.Add(new UserRepresentativeRole("ChangeDonorAddresses", true));
            objUserRole4.Add(new UserRepresentativeRole("ChangeDonorContacts", true));
            objUserRole4.Add(new UserRepresentativeRole("ChangeDonorDetails", true));
            objUserRole4.Add(new UserRepresentativeRole("ChangeDonorPerson", true));
            objUserRole4.Add(new UserRepresentativeRole("CloseAccreditationCertificationStandard", true));
            objUserRole4.Add(new UserRepresentativeRole("CloseOrgUnit", true));
            objUserRole4.Add(new UserRepresentativeRole("CloseRegistrationStandard", false));
            objUserRole4.Add(new UserRepresentativeRole("CompleteRequest", false));
            objUserRole4.Add(new UserRepresentativeRole("CancelRequest", true));
            objUserRole4.Add(new UserRepresentativeRole("CancelRequest", true));
            List<OrganizationUnitType> objOrgUnitType4 = new List<OrganizationUnitType>();
            objOrgUnitType4.Add(new OrganizationUnitType("Apheresis Centre", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Bone Marrow Collection Centre", false));
            objOrgUnitType4.Add(new OrganizationUnitType("CBB", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Collection Location", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Cord Blood Collection Centre", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Cord Registry", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Donor Centre", true));
            objOrgUnitType4.Add(new OrganizationUnitType("Donor Registry", true));
            objOrgUnitType4.Add(new OrganizationUnitType("Independent CBB", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Independent Transplant Centre", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Other Testing Laboratory", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Referring Hospital", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Search Centre", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Search Registry", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Testing Laboratory", false));
            objOrgUnitType4.Add(new OrganizationUnitType("Tissue Typing Laboratory", false));
            OrgUnitRepRole objUserOrgUnitRepRole4 = new OrgUnitRepRole();
            objUserOrgUnitRepRole4.Id = 4;
            objUserOrgUnitRepRole4.RoleName = "Application Admin";
            objUserOrgUnitRepRole4.UserRoles = objUserRole4;
            objUserOrgUnitRepRole4.OrganizationUnitTypes = objOrgUnitType4;
            objUserOrgUnitRepRole4.IsActive = true;
            orgUnitRepRoles.Add(objUserOrgUnitRepRole4);  //#Item4
        }

        public void InitializeRoleData()
        {
            List<UserRepresentativeRole> objUserRole1 = new List<UserRepresentativeRole>();
            objUserRole1.Add(new UserRepresentativeRole("Administrator", false));
            objUserRole1.Add(new UserRepresentativeRole("AddDonorBloodGroupfromafile", false));
            objUserRole1.Add(new UserRepresentativeRole("AddDonorsfromafile", false));
            objUserRole1.Add(new UserRepresentativeRole("CBBReviewer", false));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", false));
            objUserRole1.Add(new UserRepresentativeRole("CBUReports", false));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorAddresses", false));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorContacts", false));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorDetails", false));
            objUserRole1.Add(new UserRepresentativeRole("ChangeDonorPerson", false));
            objUserRole1.Add(new UserRepresentativeRole("CloseAccreditationCertificationStandard", false));
            objUserRole1.Add(new UserRepresentativeRole("CloseOrgUnit", false));
            objUserRole1.Add(new UserRepresentativeRole("CloseRegistrationStandard", false));
            objUserRole1.Add(new UserRepresentativeRole("CompleteRequest", false));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", false));
            objUserRole1.Add(new UserRepresentativeRole("CancelRequest", false));
            List<OrganizationUnitType> objOrgUnitType1 = new List<OrganizationUnitType>();
            objOrgUnitType1.Add(new OrganizationUnitType("Apheresis Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Bone Marrow Collection Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("CBB", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Collection Location", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Cord Blood Collection Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Cord Registry", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Donor Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Donor Registry", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Independent CBB", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Independent Transplant Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Other Testing Laboratory", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Referring Hospital", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Search Centre", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Search Registry", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Testing Laboratory", false));
            objOrgUnitType1.Add(new OrganizationUnitType("Tissue Typing Laboratory", false));           
            orgUnitCreateRole.Id = -1;
            orgUnitCreateRole.RoleName = string.Empty;
            orgUnitCreateRole.UserRoles = objUserRole1;
            orgUnitCreateRole.OrganizationUnitTypes = objOrgUnitType1;
            orgUnitCreateRole.IsActive = true;           
        }

    }





    public class OrgUnitRepRole
    {
        public OrgUnitRepRole() { }
        public int Id { get; set; }
        public string RoleName { get; set; }
        public List<UserRepresentativeRole> UserRoles { get; set; }
        public List<OrganizationUnitType> OrganizationUnitTypes { get; set; }
        public bool IsActive { get; set; }
    }

    public class OrgUnitRepRolesResult
    {
        public OrgUnitRepRolesResult() { }

        public string Status { get; set; }

        public List<OrgUnitRepRole> GridData { get; set; }

        public int TotalItems { get; set; }

        public string Message { get; set; }
    }


    public class OrgUnitRepRoleDetailsResult
    {
        public OrgUnitRepRoleDetailsResult() { }
        public string Status { get; set; }
        public OrgUnitRepRole Data { get; set; }
        public string Message { get; set; }
    }

    public class UserRepresentativeRole
    {
        public UserRepresentativeRole(string strName, bool matched)
        {
            this.Name = strName;
            this.Matched = matched;
        }

        public string Name { get; set; }

        public bool Matched { get; set; }
    }
    public class UserRepresentativeRolesResult
    {
        public UserRepresentativeRolesResult() { }

        public string Status { get; set; }

        public List<UserRepresentativeRole> Data { get; set; }
        public string Message { get; set; }
    }
    public class OrganizationUnitType
    {
        public OrganizationUnitType(string strName, bool matched)
        {
            this.Name = strName;
            this.Matched = matched;
        }
        public string Name { get; set; }

        public bool Matched { get; set; }
    }
    public class OrganizationUnitTypesResult
    {
        public OrganizationUnitTypesResult() { }

        public string Status { get; set; }

        public List<OrganizationUnitType> Data { get; set; }
        public string Message { get; set; }
    }

}

