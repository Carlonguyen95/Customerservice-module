using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models.DB
{
    public class DBCustomer
    {
        private readonly DBContext _context;

        public DBCustomer(DBContext context)
        {
            _context = context;
        }

        public bool AddQuestion(QuestionModel customer) {
            return false;
        }
    }
}
