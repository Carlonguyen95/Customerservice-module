using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models.DB
{
    public class DBFAQ
    {
        private readonly CustomerDBContext _context;

        public DBFAQ(CustomerDBContext context) {
            _context = context;
        }

        public IEnumerable<FAQ> getAllFAQ()
        {
            try
            {
                return _context.FAQ.ToList();
            }
            catch (ArgumentNullException e) {
                throw e;
            }
        }
    }
}
