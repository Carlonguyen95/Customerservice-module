using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceModul.Model
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions options)
            : base(options) { }
        public DbSet<QuestionModel> Question { get; set; }
        public DbSet<FAQ> Faq { get; set; }
    }

}
