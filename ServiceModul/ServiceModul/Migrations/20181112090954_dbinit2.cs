using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceModul.Migrations
{
    public partial class dbinit2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 2,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "Where does the name MovieMonster come from?", "Good question." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 3,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I get a job at MovieMonster?", "We dont hire." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 4,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "Is is possible to rent movies only?", "Renting functionality will be supported soon." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 5,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "Who is the one?", "Neo is the one." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 6,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "What is the cheapest movie?", "All movies are cheap." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 8,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "I forgot my password, what do I do?", "Send an email to moviemonster@support.com." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 9,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "What type of movies can I buy?", "MovieMonster support all kinds of movies." });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 2,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 3,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 4,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 5,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 6,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 8,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });

            migrationBuilder.UpdateData(
                table: "Faq",
                keyColumn: "ID",
                keyValue: 9,
                columns: new[] { "Question", "Solution" },
                values: new object[] { "How can I buy movies?", "Make sure you have a registered account, then navigate to movies." });
        }
    }
}
