﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions options) 
            : base(options) {}
        public DbSet<QuestionModel> Question { get; set; }
        public DbSet<FAQ> FAQ { get; set; }
    }
}
