const { uploadPdf } = require("../../middlewares/upload");
const PendingPaymentController = require("./pendingPayment.controller");
const router = require("express").Router();

router.post("/init", uploadPdf, PendingPaymentController.initPayment);
router.post("/webhook", PendingPaymentController.webhook);
router.get("/:id", PendingPaymentController.getAllDataById);


const PendingPaymentRoutes = router;
module.exports =  PendingPaymentRoutes ;
