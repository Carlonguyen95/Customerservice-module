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

            modelBuilder.Entity<QuestionModel>().HasData(
                    new QuestionModel
                    {
                        QuestionID = 1,
                        Question = "Hello! I can't seem to buy movies from MovieMonster. What could be the problem?",
                        QuestionTopic = "Can't buy movies. Help!",
                        QuestionSolution = "",
                        Rating = -5
                    },

                    new QuestionModel
                    {
                        QuestionID = 2,
                        Question = "I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server yet." +
                        "How can I undo those commits from the local repository ? ",
                        QuestionTopic = "How do I undo the most recent commits in Git?",
                        QuestionSolution = "$ git commit -m 'Something terribly misguided'" +
                        "$ git reset HEAD~" +
                        "<< edit files as necessary >>" +
                        "$ git add..." +
                        "$ git commit - c ORIG_HEAD    ",
                        Rating = 170
                    },

                    new QuestionModel
                    {
                        QuestionID = 3,
                        Question = "Will you be adding livestreaming to MovieMonster?",
                        QuestionTopic = "Livestreaming function in the future?",
                        QuestionSolution = "MovieMonster unfortunately doesn't support this function.",
                        Rating = 0
                    },

                    new QuestionModel
                    {
                        QuestionID = 4,
                        Question = "Why is my account banned? help me pls",
                        QuestionTopic = "My account is banned!!",
                        QuestionSolution = "",
                        Rating = 5
                    }

                );
        }
    }

}
