using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class dbinit3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Question",
                columns: new[] { "QuestionID", "Question", "QuestionSolution", "QuestionTopic", "Rating" },
                values: new object[,]
                {
                    { 1, "Hello! I can't seem to buy movies from MovieMonster. What could be the problem?", "", "Can't buy movies. Help!", -5 },
                    { 2, "I accidentally committed the wrong files to Git, but I haven't pushed the commit to the server yet.How can I undo those commits from the local repository ? ", "$ git commit -m 'Something terribly misguided'$ git reset HEAD~<< edit files as necessary >>$ git add...$ git commit - c ORIG_HEAD    ", "How do I undo the most recent commits in Git?", 170 },
                    { 3, "Will you be adding livestreaming to MovieMonster?", "MovieMonster unfortunately doesn't support this function.", "Livestreaming function in the future?", 0 },
                    { 4, "Why is my account banned? help me pls", "", "My account is banned!!", 5 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Question",
                keyColumn: "QuestionID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Question",
                keyColumn: "QuestionID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Question",
                keyColumn: "QuestionID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Question",
                keyColumn: "QuestionID",
                keyValue: 4);
        }
    }
}
