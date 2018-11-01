using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerQuestion { get; set; }
    }
}
