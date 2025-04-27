const express = require('express');
const UserRoutes = require('../modules/user/user.routes');
const ProfileRoutes = require('../modules/profile/profile.routes');
const ApplicationRoutes = require('../modules/application/application.routes');
const AcademicRoutes = require('../modules/academic/academic.routes');
const TestsRoutes = require('../modules/tests/tests.routes');



const router = express.Router();

const moduleRoutes = [
 
  {
    path: "/user",
    route: UserRoutes
  },
  
  {
    path: "/profile",
    route: ProfileRoutes
  },

  {
    path: "/application",
    route: ApplicationRoutes
  },
  
  {
    path: "/academic",
    route: AcademicRoutes
  },

  {
    path: "/tests",
    route: TestsRoutes
  },
  
  
 
 
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
module.exports = router;
