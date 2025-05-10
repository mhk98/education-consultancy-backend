const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle, uploadPdf } = require("../../middlewares/upload");
const PendingPaymentController = require("./pendingPayment.controller");
const router = require("express").Router();

router.post("/create", uploadPdf, PendingPaymentController.insertIntoDB);
router.get("/", PendingPaymentController.getAllFromDB);
router.get("/:id", PendingPaymentController.getAllDataById);
router.delete("/:id", PendingPaymentController.deleteIdFromDB);
router.put("/:id", uploadPdf, PendingPaymentController.updateOneFromDB);

const PendingPaymentRoutes = router;
module.exports =  PendingPaymentRoutes ;
