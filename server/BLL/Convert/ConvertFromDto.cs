using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Convert
{
    static class ConvertFromDto
    {

       public static DAL.User ConvertUsersFromDTO(Model.User user)
        {
            DAL.User convertUser = new DAL.User();
            convertUser.BornDate = user.BornDate;
            convertUser.FirstName = user.FirstName;
            convertUser.Genus = user.Genus;
            convertUser.HMO = user.HMO;
            convertUser.Id = user.Id;
            convertUser.TZ = user.TZ;
            convertUser.NumChildren = user.NumChildren;
            convertUser.LastName = user.LastName;
            return convertUser;

        }

        public static DAL.Kid ConvertKidsFromDTO(Model.Kid kid)
        {
            DAL.Kid convertKid = new DAL.Kid();
            convertKid.BornDate = kid.BornDate;
            convertKid.FullName = kid.FullName;
            convertKid.TZ = kid.TZ;
            convertKid.id = kid.Id;
            return convertKid;

        }
    }
}
