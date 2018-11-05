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
    [Route("api/Customer")]
    public class CustomerController : Controller
    {
        DBCustomer objcustomer = new DBCustomer();

        [HttpPost]
        [Route("api/Customer/Create")]
        public HttpResponseMessage Create(Customer customer)
        {
            if (ModelState.IsValid)
            {
                if (objcustomer.AddCustomerQuestion(customer))
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
                Content = new StringContent("Error adding customerquestion in database")
            };
        }
    }
}