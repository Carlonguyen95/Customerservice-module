using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceModul.Model
{
    public class QuestionModel
    {
        [Key]
        public int QuestionID { get; set; }
        public string Question { get; set; }
        public string QuestionSolution { get; set; }
    }
}
