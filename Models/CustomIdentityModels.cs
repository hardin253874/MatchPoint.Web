using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Xml;

namespace MatchPoint.Web.Models
{
    public class SimpleUser : IUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<SimpleUser> manager)
        {           
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            return userIdentity;
        }

        public override string ToString()
        {
            return string.Format("Id={0} PasswordHash={1}", Id, (PasswordHash == null ? string.Empty : PasswordHash));
        }
    }

    /// <summary>
    /// Works with SimpleUser objects stored in an XML file
    /// </summary>
    public class XmlUserStore : IUserStore<SimpleUser>, IUserPasswordStore<SimpleUser>, IUserLockoutStore<SimpleUser, object>
    {
        protected XmlDocument m_doc;

        public XmlUserStore(string credentialsXmlFile)
        {
            m_doc = new XmlDocument();
            m_doc.Load(credentialsXmlFile);
        }

        #region IUserStore implementation

        public Task<SimpleUser> FindByIdAsync(string userId)
        {
            
            if (string.IsNullOrEmpty(userId)) return Task.FromResult<SimpleUser>(null);

            SimpleUser u = null;

            if (u != null)
            {
                u = new SimpleUser { Id = userId, UserName = userId, PasswordHash = u.PasswordHash };
            }

            return Task.FromResult<SimpleUser>(u);
        }

        public Task<SimpleUser> FindByNameAsync(string userName)
        {
            string s = "pop";
            string s1 = new PasswordHasher().HashPassword(s);
            return FindByIdAsync(userName);

        }

        public Task CreateAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region IUserPasswordStore implementation

        public Task<string> GetPasswordHashAsync(SimpleUser user)
        {
            string hash = user.PasswordHash;
            return Task.FromResult<string>(hash);
        }

        public Task<bool> HasPasswordAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task SetPasswordHashAsync(SimpleUser user, string passwordHash)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region IUserLockoutStore implementation

        public Task<int> GetAccessFailedCountAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task<bool> GetLockoutEnabledAsync(SimpleUser user)
        {
            return Task.FromResult<bool>(false);
        }

        public Task<DateTimeOffset> GetLockoutEndDateAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task<int> IncrementAccessFailedCountAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task ResetAccessFailedCountAsync(SimpleUser user)
        {
            throw new NotImplementedException();
        }

        public Task SetLockoutEnabledAsync(SimpleUser user, bool enabled)
        {
            throw new NotImplementedException();
        }

        public Task SetLockoutEndDateAsync(SimpleUser user, DateTimeOffset lockoutEnd)
        {
            throw new NotImplementedException();
        }

        public Task<SimpleUser> FindByIdAsync(object userId)
        {
            throw new NotImplementedException();
        }

        #endregion

        public void Dispose()
        {
        }
    }


    public class CustomUserSore<T> : IUserStore<T> where T : SimpleUser
    {
        void IDisposable.Dispose()
        {
            // throw new NotImplementedException();

        }

        Task IUserStore<T, string>.CreateAsync(T user)
        {
            throw new NotImplementedException();
        }

        Task IUserStore<T, string>.UpdateAsync(T user)
        {
            throw new NotImplementedException();
        }

        Task IUserStore<T, string>.DeleteAsync(T user)
        {
            throw new NotImplementedException();
        }

        Task<T> IUserStore<T, string>.FindByIdAsync(string userId)
        {
            throw new NotImplementedException();
        }

        Task<T> IUserStore<T, string>.FindByNameAsync(string userName)
        {
            throw new NotImplementedException();
        }
    }

    public class CustomUserManager : UserManager<SimpleUser>
    {
        public CustomUserManager()
            : base(new CustomUserSore<SimpleUser>())
        {

        }

        public override Task<SimpleUser> FindAsync(string userName, string password)
        {
            var taskInvoke = Task<SimpleUser>.Factory.StartNew(() =>
            {
                if (userName == "username" && password == "password")
                {
                    return new SimpleUser { Id = "NeedsAnId", UserName = "UsernameHere" };
                }
                return null;
            });

            return taskInvoke;
        }
    }
}