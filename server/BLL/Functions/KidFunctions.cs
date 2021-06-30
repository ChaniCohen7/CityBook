using BLL.Convert;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Functions
{
    public static class KidFunctions
    {
        public static void AddKid(Model.Kid kid)
        {
            DAL.DAlFunctions.PostKid(ConvertFromDto.ConvertKidsFromDTO(kid));
        }
    }
}
