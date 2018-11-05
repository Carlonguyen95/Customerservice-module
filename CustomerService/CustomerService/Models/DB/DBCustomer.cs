using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models.DB
{
    public class DBCustomer
    {
        private readonly CustomerDBContext _context;

        public DBCustomer(CustomerDBContext context)
        {
            _context = context;
        }

        public bool AddQuestion(Customer customer) {
            return false;
        }
    }
}
