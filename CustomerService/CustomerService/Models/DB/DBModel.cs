using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models.DB
{
    public class DBModel : DbContext
    {
        public DBModel(DbContextOptions<DBModel> options) : base(options) { }

        public DbSet<CustomerAsk> CustomerAsk { get; set; }  
    }

    public class CustomerAsk
    {
        public int CustomerID { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerQuestion { get; set; }
    }
}
