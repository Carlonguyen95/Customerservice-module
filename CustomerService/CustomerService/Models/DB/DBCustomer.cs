using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Models.DB
{
    public class DBCustomer
    {
        CustomerDBContext db = new CustomerDBContext();

        public bool AddCustomerQuestion(Customer customer)
        {
            try
            {
                db.Customer.Add(customer);
                db.SaveChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
