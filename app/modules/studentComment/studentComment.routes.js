const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const StudentCommentController = require("./studentComment.controller");
const router = require("express").Router();

router.post("/create",  StudentCommentController.insertIntoDB);
router.get("/", StudentCommentController.getAllFromDB);
router.get("/:applicationId/:commentId", StudentCommentController.getDataById);
router.delete("/:id", StudentCommentController.deleteIdFromDB);
router.put("/:applicationId/:commentId", StudentCommentController.updateOneFromDB);

const StudentCommentRoutes = router;
module.exports =  StudentCommentRoutes ;
