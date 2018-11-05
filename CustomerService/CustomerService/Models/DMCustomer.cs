using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models
{
    public class DMCustomer
    {
        [Required]
        public int CustomerID { get; set; }
        [Required]
        public string CustomerEmail { get; set; }
        [Required]
        public string CustomerQuestion { get; set; }
    }
}
