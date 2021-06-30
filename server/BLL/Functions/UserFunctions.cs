using BLL.Convert;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Functions
{
    public static class UserFunctions
    {
        public static void AddUser(Model.User user)
        {
            DAL.DAlFunctions.PostUser(ConvertFromDto.ConvertUsersFromDTO(user));
        }
        
    }
}
