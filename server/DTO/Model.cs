using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
namespace Model
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TZ { get; set; }
        public DateTime BornDate { get; set; }
        public string Genus { get; set; }
        public string HMO { get; set; }
        public int NumChildren { get; set; }
    }
    public class Kid
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string TZ { get; set; }
        public DateTime BornDate { get; set; }
    }
}
