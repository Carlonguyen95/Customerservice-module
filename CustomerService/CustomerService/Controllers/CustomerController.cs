using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    [Produces("application/json")]
    [Route("api/Customer")]
    public class CustomerController : Controller
    {
        Customer objcustomer = new Customer();

        [HttpPost]
        [Route("api/Customer/Create")]
        public int Create(Customer customer)
        {
            return objcustomer.AddCustomer(customer);
        }
    }
}