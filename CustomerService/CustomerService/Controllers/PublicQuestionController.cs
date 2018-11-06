using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using CustomerService.Models;
using CustomerService.Models.DB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class PublicQuestionController : Controller
    {
        private readonly DBContext _context;

        public PublicQuestionController(DBContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("api/Question/Create")]
        public HttpResponseMessage Create(QuestionModel customer)
        {
            var db = new DBCustomer(_context);
            if (ModelState.IsValid)
            {
                if (db.AddQuestion(customer))
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.NotFound,
                Content = new StringContent("Error adding question in database")
            };
        }
    }
}