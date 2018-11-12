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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FAQ>().HasData(
                    new FAQ
                    {
                        ID = 10,
                        Question = "What is MovieMonster?",
                        Solution = "MovieMonster is simply a original major streaming option for home television audiences." +
                        "When it started nearly 20 years ago, MovieMonster was a subscription - based DVD service that would mail" +
                        "DVDs straight to your home."
                    },

                    new FAQ
                    {
                        ID = 1,
                        Question = "How can I buy movies?",
                        Solution = "Make sure you have a registered account, then navigate to movies."
                    },

                    new FAQ
                    {
                        ID = 2,
                        Question = "Where does the name MovieMonster come from?",
                        Solution = "Good question."
                    },

                    new FAQ
                    {
                        ID = 3,
                        Question = "How can I get a job at MovieMonster?",
                        Solution = "We dont hire."
                    },

                    new FAQ
                    {
                        ID = 4,
                        Question = "Is is possible to rent movies only?",
                        Solution = "Renting functionality will be supported soon."
                    },

                    new FAQ
                    {
                        ID = 5,
                        Question = "Who is the one?",
                        Solution = "Neo is the one."
                    },

                    new FAQ
                    {
                        ID = 6,
                        Question = "What is the cheapest movie?",
                        Solution = "All movies are cheap."
                    },

                    new FAQ
                    {
                        ID = 7,
                        Question = "How can I buy movies?",
                        Solution = "Make sure you have a registered account, then navigate to movies."
                    },

                    new FAQ
                    {
                        ID = 8,
                        Question = "I forgot my password, what do I do?",
                        Solution = "Send an email to moviemonster@support.com."
                    },

                    new FAQ
                    {
                        ID = 9,
                        Question = "What type of movies can I buy?",
                        Solution = "MovieMonster support all kinds of movies."
                    }
                );
        }
    }

}
