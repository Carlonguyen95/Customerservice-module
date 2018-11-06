using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceModul.Model
{
    public class FAQ
    {
        [Key]
        public int ID { get; set; }
        public string Question { get; set; }
        public string Solution { get; set; }
    }
}
