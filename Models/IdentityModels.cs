using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Linq;
using System.Data.Entity;

namespace MatchPoint.Web.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }

    public class AppUser : IUser
    {
        //Existing database fields
        public long AppUserId { get; set; }
        public string AppUserName { get; set; }
        public string AppPassword { get; set; }

        public AppUser()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<AppUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        [Ignore]
        public virtual string Id { get; set; }
        [Ignore]
        public string UserName
        {
            get
            {
                return AppUserName;
            }
            set
            {
                AppUserName = value;
            }
        }
    }

    
    public class UserStoreService
         : IUserStore<AppUser>, IUserPasswordStore<AppUser>
    {

        MatchPointWebContext context = new MatchPointWebContext();

        public Task CreateAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        public Task<AppUser> FindAsync (string userName, string password)
        {
            Task<AppUser> task = context.AppUsers.Where(
                                  apu => apu.AppUserName == userName && apu.AppPassword == password)
                                  .FirstOrDefaultAsync();

            return task;
        }

        public Task<AppUser> FindByIdAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<AppUser> FindByNameAsync(string userName)
        {
            Task<AppUser> task = context.AppUsers.Where(
                                  apu => apu.AppUserName == userName)
                                  .FirstOrDefaultAsync();

            return task;
            //throw new NotImplementedException();
        }

        public Task UpdateAsync(AppUser user)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public Task<string> GetPasswordHashAsync(AppUser user)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }

            return Task.FromResult(user.AppPassword);
        }

        public Task<bool> HasPasswordAsync(AppUser user)
        {
            return Task.FromResult(user.AppPassword != null);
        }

        public Task SetPasswordHashAsync(AppUser user, string passwordHash)
        {
            throw new NotImplementedException();
        }

    }


    internal class IgnoreAttribute : Attribute
    {
    }

    public class CustomUserSore<T> : IUserStore<T> where T : ApplicationUser
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

    public class CustomUserManager : UserManager<ApplicationUser>
    {
        public CustomUserManager()
            : base(new CustomUserSore<ApplicationUser>())
        {

        }

        public override Task<ApplicationUser> FindAsync(string userName, string password)
        {
            var taskInvoke = Task<ApplicationUser>.Factory.StartNew(() =>
            {
                if (userName == "username" && password == "password")
                {
                    return new ApplicationUser { Id = "NeedsAnId", UserName = "UsernameHere" };
                }
                return null;
            });

            return taskInvoke;
        }
    }
}