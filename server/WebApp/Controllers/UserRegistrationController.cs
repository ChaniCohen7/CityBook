using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Model;
using BLL;

namespace WebApp.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins:"*",headers:"*",methods:"*")]
    public class UserRegistrationController : ApiController
    {
        // GET: api/UserRegistratio
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UserRegistration/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UserRegistration
        public void Post([FromBody] Model.User user)
        {
            BLL.Functions.UserFunctions.AddUser(user);
        }

        // PUT: api/UserRegistration/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/UserRegistration/5
        public void Delete(int id)
        {
        }
    }
}
