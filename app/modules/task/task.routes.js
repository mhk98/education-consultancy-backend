const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle, uploadPdf } = require("../../middlewares/upload");
const TaskController = require("./task.controller");
const router = require("express").Router();

router.post("/create", uploadPdf,  TaskController.insertIntoDB);
router.get("/", TaskController.getAllFromDB);
router.get("/:user_id", TaskController.getAllDataById);
router.delete("/:id", TaskController.deleteIdFromDB);
router.put("/:id", TaskController.updateOneFromDB);

const TaskRoutes = router;
module.exports =  TaskRoutes ;
