using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class KidRegistrationController : ApiController
    {
        // GET: api/KidRegistration
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/KidRegistration/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/KidRegistration
        public void Post([FromBody] Model.Kid kid)
        {
            BLL.Functions.KidFunctions.AddKid(kid);
        }


        // PUT: api/KidRegistration/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/KidRegistration/5
        public void Delete(int id)
        {
        }
    }
}
