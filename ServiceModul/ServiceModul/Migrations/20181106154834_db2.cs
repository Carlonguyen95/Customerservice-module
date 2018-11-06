using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class db2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "QuestionTopic",
                table: "Question",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SolutionRating",
                table: "Question",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestionTopic",
                table: "Question");

            migrationBuilder.DropColumn(
                name: "SolutionRating",
                table: "Question");
        }
    }
}
