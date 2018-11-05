using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerService.Models;
using CustomerService.Models.DB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FAQController : Controller
    {
        private readonly CustomerDBContext _context;

        public FAQController(CustomerDBContext context)
        {
            _context = context;
        }

        // List all FAQ data
        [HttpGet("[action]")]
        public IEnumerable<FAQ> Index()
        {
            var db = new DBFAQ(_context);
            return db.getAllFAQ();
        }
    }
}