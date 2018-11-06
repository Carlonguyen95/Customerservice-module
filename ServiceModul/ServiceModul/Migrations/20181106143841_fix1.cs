using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class fix1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "QuestionSolution",
                table: "Question",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "QuestionSolution",
                table: "Question",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
