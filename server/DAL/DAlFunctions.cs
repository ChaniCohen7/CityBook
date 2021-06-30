using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DAlFunctions
    {
        public static void PostUser(User user)
        {
            try
            {
                using (CityBookDataBaseEntities entity= new CityBookDataBaseEntities())
                {
                    entity.Users.Add(user);
                    entity.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw new Exception("Fail to create Users");
            }
        }
        public static void PostKid(Kid kid)
        {
            try
            {
                using (CityBookDataBaseEntities entity = new CityBookDataBaseEntities())
                {
                    entity.Kids.Add(kid);
                    entity.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw new Exception("Fail to create Kids");
            }
        }
    }
}
