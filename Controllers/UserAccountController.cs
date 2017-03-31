using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Http;
using System.Net.Http;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using MatchPoint.Web.Models;
using MatchPoint.Web.Filters;
namespace MatchPoint.Web.Controllers
{
    [RoutePrefix("UserAccountAPI")]
    public class UserAccountController : ApiController
    {

        List<AuthMethod> lstAuthMethod = new List<AuthMethod>();

        UserAccount[] userAccounts = new UserAccount[]
        {
            new UserAccount { Id = 1, userName = "TestUser1", email = "TestUser1@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1980,1,1) },
            new UserAccount { Id = 2, userName = "TestUser2", email = "TestUser2@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1981,2,2) },
            new UserAccount { Id = 3, userName = "TestUser3", email = "TestUser3@abmdr.org.au", userOnlineDetails = "Online", isLocked = "No", birthday=new DateTime(1983,3,3) },
            new UserAccount { Id = 4, userName = "TestUser4", email = "TestUser4@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1984,4,4) },
            new UserAccount { Id = 5, userName = "TestUse51", email = "TestUser5@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1985,5,5) },
            new UserAccount { Id = 6, userName = "TestUser6", email = "TestUser6@abmdr.org.au", userOnlineDetails = "Online", isLocked = "No", birthday=new DateTime(1986,6,6) },
            new UserAccount { Id = 7, userName = "TestUser7", email = "TestUser7@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1987,7,7) },
            new UserAccount { Id = 8, userName = "TestUser8", email = "TestUser8@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1988,8,8) },
            new UserAccount { Id = 9, userName = "TestUser9", email = "TestUser9@abmdr.org.au", userOnlineDetails = "Online", isLocked = "No", birthday=new DateTime(1989,9,9) },
            new UserAccount { Id = 10, userName = "TestUser10", email = "TestUser10@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1990,10,10) },
            new UserAccount { Id = 11, userName = "TestUser11", email = "TestUser11@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1991,11,11) },
            new UserAccount { Id = 12, userName = "TestUser12", email = "TestUser12@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1992,12,12) },
            new UserAccount { Id = 13, userName = "TestUser13", email = "TestUser13@abmdr.org.au", userOnlineDetails = "Online", isLocked = "No", birthday=new DateTime(1980,1,13) },
            new UserAccount { Id = 14, userName = "TestUser14", email = "TestUser14@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1981,2,24) },
            new UserAccount { Id = 15, userName = "TestUser15", email = "TestUser14@abmdr.org.au", userOnlineDetails = "Offline, never logged in", isLocked = "No", birthday=new DateTime(1982,3,31) },
        };

        UserRole[] userRoles = new UserRole[]
            {
                 new UserRole {Id = 1, RoleName = "Test Role1", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 2, RoleName = "Test Role2", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 3, RoleName = "Test Role3", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 4, RoleName = "Test Role4", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 5, RoleName = "Test Role5", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 6, RoleName = "Test Role6", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 7, RoleName = "Test Role7", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 8, RoleName = "Test Role8", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 9, RoleName = "Test Role9", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 10, RoleName = "Test Role10", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 11, RoleName = "Test Role11", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 12, RoleName = "Test Role12", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 13, RoleName = "Test Role13", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 14, RoleName = "Test Role14", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" },
                 new UserRole {Id = 15, RoleName = "Test Role15", AllUsers = "Testdata allusers", UpdatePatientApplicationDetails = "User can update patient Application details", UpdatePatientTasks = "User can update tasks" }
            };

        UserAccountDetail[] userAccountDetails = new UserAccountDetail[]
            {
              new UserAccountDetail { Id=1,userName="TestUser1",email="TestUser1@admdr.org.au", alternateEmail="TestUser1Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=2,userName="TestUser2",email="TestUser2@admdr.org.au", alternateEmail="TestUser2Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=3,userName="TestUser3",email="TestUser3@admdr.org.au", alternateEmail="TestUser3Alt@admdr.org.au", authMethod="Symantec (Email)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=4,userName="TestUser4",email="TestUser4@admdr.org.au", alternateEmail="TestUser4Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=5,userName="TestUser5",email="TestUser5@admdr.org.au", alternateEmail="TestUser5Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=6,userName="TestUser6",email="TestUser6@admdr.org.au", alternateEmail="TestUser6Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=7,userName="TestUser7",email="TestUser7@admdr.org.au", alternateEmail="TestUser7Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=8,userName="TestUser8",email="TestUser8@admdr.org.au", alternateEmail="TestUser8Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=9,userName="TestUser9",email="TestUser9@admdr.org.au", alternateEmail="TestUser9Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=10,userName="TestUser10",email="TestUser10@admdr.org.au", alternateEmail="TestUser10Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=11,userName="TestUser11",email="TestUser11@admdr.org.au", alternateEmail="TestUser11Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=12,userName="TestUser12",email="TestUser12@admdr.org.au", alternateEmail="TestUser12Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=13,userName="TestUser13",email="TestUser13@admdr.org.au", alternateEmail="TestUser13Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=14,userName="TestUser14",email="TestUser14@admdr.org.au", alternateEmail="TestUser14Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""},
              new UserAccountDetail { Id=15,userName="TestUser15",email="TestUser15@admdr.org.au", alternateEmail="TestUser15Alt@admdr.org.au", authMethod="RSA (Token)",lastActive="20/01/2007 13:48:45", lastLogin="20/01/2007 13:48:45", created="01/01/2017 13:11:33",isLocked="No",comment=""}
            };



        [Route("GetUserAccounts")]
        [HttpPost]
        [Authorize]
        public HttpResponseMessage GetAllUserAccounts(Object gridOptions)
        {
            if (gridOptions == null)
                throw new NotImplementedException("The grid option cannot be null");

            List<UserAccount> pagedUserAccount = new List<UserAccount>();
            int totalItem = 0;

            GetAllUserAccountsContent(gridOptions, out pagedUserAccount, out totalItem);

            UserAccountsResult userAccountsResult = new UserAccountsResult
            {
                GridData = pagedUserAccount,
                TotalItems = totalItem
            };
          
            string json = JsonConvert.SerializeObject(userAccountsResult);

            try
            {
                return new HttpResponseMessage
                {
                    Content = new StringContent(json)
                };
            }catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
            
        }
        [Route("GetUserAccountsV2")]
        [HttpPost]
        [Authorize]
        public IHttpActionResult GetAllUserAccountsV2(Object gridOptions)
        {

            if (gridOptions == null)
                throw new NotImplementedException("The grid option cannot be null");


            List<UserAccount> pagedUserAccount = new List<UserAccount>();
            int totalItem = 0;

            GetAllUserAccountsContent(gridOptions, out pagedUserAccount, out totalItem);


            var json = new
            {
                GridData = pagedUserAccount,
                TotalItems = totalItem
            };

            return Ok(json);
        }

        [Route("GetExceptionV2")]
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult GetException()
        {
            throw new Exception("Test exception and log function");
        }
        private void GetAllUserAccountsContent(Object gridOptions, out List<UserAccount> pagedUserAccount, out int totalItem)
        {
           
            GridOptions objGridOptions = JsonConvert.DeserializeObject<GridOptions>(gridOptions.ToString());

            List<UserAccount> filteredUserAccount = userAccounts.Where(u => u.userName.Contains(objGridOptions.SearchText)).ToList();

            if (objGridOptions.SortColumns != null && objGridOptions.SortColumns.Count > 0)
            {
                SortColumn firstSortColumn = objGridOptions.SortColumns.FirstOrDefault();

                if (firstSortColumn.direction == "desc")
                    filteredUserAccount = filteredUserAccount.OrderByDescending(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
                else
                    filteredUserAccount = filteredUserAccount.OrderBy(u => u.GetType().GetProperty(firstSortColumn.name).GetValue(u, null)).ToList();
            }

            if (objGridOptions.FilterColumns != null && objGridOptions.FilterColumns.Count > 0)
            {
                foreach (FilterColumn filterColumn in objGridOptions.FilterColumns)
                {
                    foreach (Filter filter in filterColumn.filters)
                    {
                        if (filter.term != null)
                        {
                            filteredUserAccount = filteredUserAccount.Where(m => { return filterQuery(m, filterColumn.name, filter); }).ToList();
                        }                        
                    }                    
                }
            }


            totalItem = filteredUserAccount.Count;
            int startIndex = (objGridOptions.PageNumber - 1) * objGridOptions.PageSize;
            int size = objGridOptions.PageSize < (totalItem - startIndex) ? objGridOptions.PageSize : totalItem - startIndex;
            pagedUserAccount = filteredUserAccount.GetRange(startIndex, size);
            
            if (filteredUserAccount.Count > size)
                pagedUserAccount = filteredUserAccount.GetRange(startIndex, size);
            else
                pagedUserAccount = filteredUserAccount;


            

            //string json = JsonConvert.SerializeObject(userAccountsResult);
            //try
            //{
            //    return new HttpResponseMessage
            //    {
            //        Content = new StringContent(json)
            //    };
            //}
            //catch
            //{
            //    return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            //}
            
        }

        private bool filterQuery(UserAccount userAccount, string columnName, Filter filter)
        {           
            if (userAccount == null || filter == null || string.IsNullOrEmpty(columnName))
                return true;

            FilterCondition filterCondition;

            //TODO update the correct filter logic in real project
            if (filter.condition == null || !Enum.TryParse(filter.condition, out filterCondition))
                return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term); 
            else
            {
                switch (filterCondition)
                {
                    case FilterCondition.STARTS_WITH:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.ENDS_WITH:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.EXACT:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.CONTAINS:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.GREATER_THAN:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.GREATER_THAN_OR_EQUAL:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.LESS_THAN:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.LESS_THAN_OR_EQUAL:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    case FilterCondition.NOT_EQUAL:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                    default:
                        return userAccount.GetType().GetProperty(columnName).GetValue(userAccount, null).ToString().Contains(filter.term);
                        
                }
            }
        }


        [Route("GetUserRoles/{userAccId}")]
        [HttpGet]
        public string GetUserRoles(int userAccId)
        {
            UserRole objUserRole = (from obj in userRoles
                                    where obj.Id == userAccId
                                    select obj).FirstOrDefault();

            var jsonUserRoleData = new JavaScriptSerializer().Serialize(objUserRole);
            return jsonUserRoleData;
        }

        [Route("GetUserAccountDetails/{userAccId}")]
        [HttpGet]
        public string GetUserAccountDetails(int userAccId)
        {

            UserAccountDetail objUserAccountDetail = (from obj in userAccountDetails
                                                      where obj.Id == userAccId
                                                      select obj).FirstOrDefault();

            var jsonUserAccountDetail = new JavaScriptSerializer().Serialize(objUserAccountDetail);
            return jsonUserAccountDetail;
        }

        [Route("ValidateUserName/{userName}")]
        [HttpGet]
        [Authorize]
        public HttpResponseMessage ValidateUserName(string userName)
        {
            bool isValidate = false;


            List<UserAccount> filteredUserAccount = userAccounts.Where(u => u.userName == userName).ToList();


            isValidate = filteredUserAccount == null || filteredUserAccount.Count == 0;

            ValidateResult validateResult = new ValidateResult
            {
                IsValid = isValidate,
                Message = isValidate ? "" : "Duplicate Username"
            };
            string json = JsonConvert.SerializeObject(validateResult);
            try
            {
                return new HttpResponseMessage
                {
                    Content = new StringContent(json)
                };
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
            
        }

        [Route("UpdateUserDetails")]
        [HttpPost]
        public string UpdateUserDetailsFunc(int userAccId, Object UserAccDetail, Object UserRole)
        {

            UserAccountDetail objUserAccDetail = (UserAccountDetail)UserAccDetail;
            UserRole objUserRole = (UserRole)UserRole;

            // Update Data - logic - should be modified accordingly
            UserAccountDetail objUserAccountDetail = (from obj in userAccountDetails
                                                      where obj.Id == objUserAccDetail.Id
                                                      select obj).FirstOrDefault();
            
            UserRole objUserRoleValue = (from obj in userRoles
                                     where obj.Id == objUserRole.Id
                                     select obj).FirstOrDefault();


            return "Success";
        }

        [Route("UpdateUserAccountDetails")]
        [HttpPost]
        [Authorize]
        public HttpResponseMessage UpdateUserAccountDetailsFunc(Object UserAccDetail)
        {

            // UserAccountDetail objUserAccDetail = (UserAccountDetail)UserAccDetail;

            // return "Success";

            if (ModelState.IsValid)
            {

                return new HttpResponseMessage(HttpStatusCode.OK);
            }


            var response = new ErrorResult();
            response.Status = "Error";
            response.Errors = (from item in ModelState
                               where item.Value.Errors.Any()
                               select item.Value.Errors[0].ErrorMessage).ToList();
            string json = JsonConvert.SerializeObject(response);

            return new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent(json)
            };

        }

        //LoadAuthMethodValues
        [Route("LoadAuthMethodValues")]
        [HttpPost]
        public HttpResponseMessage LoadAuthMethodValues(Object objAuthMethod)
        {
            InitializeAuthMethodValues();

            AuthMethodItemsResult authMethodItemsResult = new AuthMethodItemsResult
            {
                Status = "Success",
                Message = "Load AuthMethod Items",
                Data = lstAuthMethod
            };

            string json = JsonConvert.SerializeObject(authMethodItemsResult);

            return new HttpResponseMessage
        {
                Content = new StringContent(json)
            };
        }


        public void InitializeAuthMethodValues()
        {
            lstAuthMethod.Add(new AuthMethod(1, "RSA (Token)"));
            lstAuthMethod.Add(new AuthMethod(2, "Symantec (Token)"));
            lstAuthMethod.Add(new AuthMethod(3, "Symantec (Email)"));
            lstAuthMethod.Add(new AuthMethod(4, "Symantec (SMS)"));
        }

    }





}


public class UserAccountsResult
{
    public UserAccountsResult() { }

   
    public List<UserAccount> GridData { get; set; }

    public int TotalItems { get; set; }
}

public class ValidateResult
{
    public ValidateResult() { }

    public bool IsValid { get; set; }
    public string Message { get; set; }
}
public class GridOptions
{
    public GridOptions() { }

    public string SearchText { get; set; }

    public int PageNumber { get; set; }

    public int PageSize { get; set; }

    public List<SortColumn> SortColumns { get; set; }

    public List<FilterColumn> FilterColumns { get; set; }
}

public class SortColumn
{
    public SortColumn() { }

    public string name { get; set; }
    public string direction { get; set; }
}

public class FilterColumn
{
    public FilterColumn() { }
    
    public string name { get; set; }

    public List<Filter> filters { get; set; }
}

public enum FilterCondition
{
    STARTS_WITH = 2,
    ENDS_WITH = 4,
    EXACT = 8,
    CONTAINS = 16,
    GREATER_THAN = 32,
    GREATER_THAN_OR_EQUAL = 64,
    LESS_THAN = 128,
    LESS_THAN_OR_EQUAL = 256,
    NOT_EQUAL = 512
}

public class Filter
{
    public Filter() { }

    public string condition { get; set; }

    public string term { get; set; }
}

public class UserRole
{

    public UserRole() { }

    public int Id { get; set; }
    public string RoleName { get; set; }
    public string AllUsers { get; set; }
    public string UpdatePatientApplicationDetails { get; set; }
    public string UpdatePatientTasks { get; set; }

}

public class UserAccountDetail
{
    public UserAccountDetail() { }
    public int Id { get; set; }
    public string userName { get; set; }
    public string email { get; set; }
    public string alternateEmail { get; set; }
    public string authMethod { get; set; }
    public string lastActive { get; set; }
    public string lastLogin { get; set; }
    public string created { get; set; }
    public string isLocked { get; set; }
    public string comment { get; set; }
}

public class UserAccount
{
    public UserAccount() { }

    public int Id { get; set; }
    public string userName { get; set; }
    public string email { get; set; }
    public string userOnlineDetails { get; set; }
    public string isLocked { get; set; }
    public DateTime birthday { get; set; }
}

public class AuthMethod
{
    public AuthMethod() { }

    public AuthMethod(int id, string name)
    {
        this.Id = id;
        this.Name = name;
    }

    public int Id { get; set; }

    public string Name { get; set; }

}

public class AuthMethodItemsResult
{
    public AuthMethodItemsResult() { }
    public string Status { get; set; }
    public string Message { get; set; }
    public List<AuthMethod> Data { get; set; }

}