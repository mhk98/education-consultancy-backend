const express = require('express');
const UserRoutes = require('../modules/user/user.routes');
const ProfileRoutes = require('../modules/profile/profile.routes');
const ApplicationRoutes = require('../modules/application/application.routes');
const AcademicRoutes = require('../modules/academic/academic.routes');
const TestsRoutes = require('../modules/tests/tests.routes');
const DocumentRoutes = require('../modules/document/document.routes');
const StudentCommentRoutes = require('../modules/studentComment/studentComment.routes');
const StudentReplyRoutes = require('../modules/studentReply/studentReply.routes');
const KCCommentRoutes = require('../modules/kcComment/kcComment.routes');
const KCReplyRoutes = require('../modules/kcReply/kcReply.routes');
const AdditionalDocumentRoutes = require('../modules/additionalDocument/additionalDocument.routes');



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

  {
    path: "/document",
    route: DocumentRoutes
  },

  {
    path: "/studentComment",
    route: StudentCommentRoutes
  },

  {
    path: "/studentReply",
    route: StudentReplyRoutes
  },

  {
    path: "/kcComment",
    route: KCCommentRoutes
  },

  {
    path: "/kcReply",
    route: KCReplyRoutes
  },
  {
    path: "/additionalDocument",
    route: AdditionalDocumentRoutes
  },
  
  
 
 
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
module.exports = router;
