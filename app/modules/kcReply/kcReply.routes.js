const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const KCReplyController = require("./kcReply.controller");
const router = require("express").Router();

router.post("/create",  KCReplyController.insertIntoDB);


const KCReplyRoutes = router;
module.exports =  KCReplyRoutes ;
