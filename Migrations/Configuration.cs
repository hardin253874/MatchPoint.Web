namespace MatchPoint.Web.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using MatchPoint.Web.Models;
    internal sealed class Configuration : DbMigrationsConfiguration<MatchPointWebContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MatchPointWebContext context)
        {
            context.AppUsers.AddOrUpdate(x => x.AppUserId,
                 new AppUser() { AppUserId = 1, AppUserName = "test@test.com", AppPassword = "Password0!" },
                 new AppUser() { AppUserId = 2, AppUserName = "test@test.com", AppPassword = "Password0!" },
                 new AppUser() { AppUserId = 3, AppUserName = "test@test.com", AppPassword = "Password0!" }
                 );



            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
