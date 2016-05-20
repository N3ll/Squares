using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Squares.Controllers
{
    public class UserProfileController : Controller
    {
        //[Authorize]
        public ActionResult UserProfile()
        {
            return View();
        }

        //used in UserProfileController.js in order to get the logged user
        public ActionResult GetLoggedUser()
        {
            var jsonStringFromSomewhere = "{\"name\":\"Bradley Cooper\",\"description\":\"Cooper garnered consecutive Oscar nominations from 2013 to 2015 for his roles in the romantic comedy Silver Linings Playbook.\",\"address\":\"New York, USA\",\"email\":\"cooper@mail.com\",\"web\":\"www.bradleycooper.com\",\"img\": \"/Content/images/profile.jpg\",\"sets\":[{\"id\": 1,\"name\":\"CLOWN\", \"author\": \"Neo\", \"description\": \"Cras justo odio, dapibus ac facilisis in, egestas eget quam.\", \"rating\": 100, \"thumbnail\":\"/Content/images/square-3.png\",\"comments\":[{\"user\":\"Bob\",\"img\":\"/Content/images/bob.jpg\",\"text\":\"Those colors are amazing\"}], \"squares\": [{\"img\": \"/Content/images/square-3/1.jpg\",\"x\": 1,\"y\": 1}, {\"img\":\"/Content/images/square-3/2.jpg\",\"x\": 1,\"y\": 2}, {\"img\": \"/Content/images/square-3/3.jpg\",\"x\": 1,\"y\": 3 }, {\"img\": \"/Content/images/square-3/4.jpg\",\"x\": 1,\"y\": 4}, {\"img\": \"/Content/images/square-3/5.jpg\",\"x\": 1,\"y\": 5}, {\"img\":\"/Content/images/square-3/6.jpg\",\"x\": 2,\"y\": 1}, {\"img\": \"/Content/images/square-3/7.jpg\",\"x\": 2,\"y\": 2}, {\"img\": \"/Content/images/square-3/8.jpg\",\"x\": 2,\"y\": 3}, {\"img\": \"/Content/images/square-3/9.jpg\",\"x\": 2,\"y\": 4}, {\"img\": \"/Content/images/square-3/10.jpg\",\"x\": 2,\"y\": 5},{\"img\": \"/Content/images/square-3/11.jpg\",\"x\": 3,\"y\": 1},{\"img\": \"/Content/images/square-3/12.jpg\",\"x\": 3,\"y\": 2},{\"img\": \"/Content/images/square-3/13.png\",\"x\": 3,\"y\": 3},{\"img\": \"/Content/images/square-3/14.jpg\",\"x\": 3,\"y\": 4},{\"img\": \"/Content/images/square-3/15.jpg\",\"x\": 3,\"y\": 5},{\"img\": \"/Content/images/square-3/16.jpg\",\"x\": 4,\"y\": 1},{\"img\": \"/Content/images/square-3/17.jpg\",\"x\": 4,\"y\": 2},{\"img\": \"/Content/images/square-3/18.jpg\",\"x\": 4,\"y\": 3},{\"img\": \"/Content/images/square-3/19.jpg\",\"x\": 4,\"y\": 4},{\"img\": \"/Content/images/square-3/20.jpg\",\"x\": 4,\"y\": 5},{\"img\": \"/Content/images/square-3/21.jpg\",\"x\": 5,\"y\": 1},{\"img\": \"/Content/images/square-3/22.jpg\",\"x\": 5,\"y\": 2},{\"img\": \"/Content/images/square-3/23.jpg\",\"x\": 5,\"y\": 3},{\"img\": \"/Content/images/square-3/24.jpg\",\"x\": 5,\"y\": 4},{\"img\": \"/Content/images/square-3/25.jpg\",\"x\": 5,\"y\": 5}]}]}";

            return Content(jsonStringFromSomewhere, "application/json");
        }
    }
}