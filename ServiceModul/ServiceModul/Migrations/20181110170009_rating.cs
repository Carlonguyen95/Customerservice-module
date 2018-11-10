using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class rating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SolutionRating",
                table: "Question",
                newName: "Rating");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Rating",
                table: "Question",
                newName: "SolutionRating");
        }
    }
}
