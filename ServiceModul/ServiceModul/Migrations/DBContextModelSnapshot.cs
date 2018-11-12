﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceModul.Model;

namespace ServiceModul.Migrations
{
    [DbContext(typeof(DBContext))]
    partial class DBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ServiceModul.Model.FAQ", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Question");

                    b.Property<string>("Solution");

                    b.HasKey("ID");

                    b.ToTable("Faq");

                    b.HasData(
                        new { ID = 10, Question = "What is MovieMonster?", Solution = "MovieMonster is simply a original major streaming option for home television audiences.When it started nearly 20 years ago, MovieMonster was a subscription - based DVD service that would mailDVDs straight to your home." },
                        new { ID = 1, Question = "How can I buy movies?", Solution = "Make sure you have a registered account, then navigate to movies." },
                        new { ID = 2, Question = "Where does the name MovieMonster come from?", Solution = "Good question." },
                        new { ID = 3, Question = "How can I get a job at MovieMonster?", Solution = "We dont hire." },
                        new { ID = 4, Question = "Is is possible to rent movies only?", Solution = "Renting functionality will be supported soon." },
                        new { ID = 5, Question = "Who is the one?", Solution = "Neo is the one." },
                        new { ID = 6, Question = "What is the cheapest movie?", Solution = "All movies are cheap." },
                        new { ID = 7, Question = "How can I buy movies?", Solution = "Make sure you have a registered account, then navigate to movies." },
                        new { ID = 8, Question = "I forgot my password, what do I do?", Solution = "Send an email to moviemonster@support.com." },
                        new { ID = 9, Question = "What type of movies can I buy?", Solution = "MovieMonster support all kinds of movies." }
                    );
                });

            modelBuilder.Entity("ServiceModul.Model.QuestionModel", b =>
                {
                    b.Property<int>("QuestionID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Question");

                    b.Property<string>("QuestionSolution");

                    b.Property<string>("QuestionTopic");

                    b.Property<int>("Rating");

                    b.HasKey("QuestionID");

                    b.ToTable("Question");
                });
#pragma warning restore 612, 618
        }
    }
}
