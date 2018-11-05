﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models
{
    public class CustomerDBContext : DbContext
    {
        public CustomerDBContext() { }
        public CustomerDBContext(DbContextOptions options) : base(options) {}
        public DbSet<Customer> Customer { get; set; }
        public DbSet<FAQ> FAQ { get; set; }
    }
}
