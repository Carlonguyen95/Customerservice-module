using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class dbinit1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Faq",
                columns: new[] { "ID", "Question", "Solution" },
                values: new object[,]
                {
                    { 10, "What is MovieMonster?", "MovieMonster is simply a original major streaming option for home television audiences.When it started nearly 20 years ago, MovieMonster was a subscription - based DVD service that would mailDVDs straight to your home." },
                    { 1, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 2, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 3, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 4, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 5, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 6, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 7, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 8, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." },
                    { 9, "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 10);
        }
    }
}
