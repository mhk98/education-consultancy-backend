const PendingPaymentController = require("./pendingPayment.controller");
const router = require("express").Router();

router.post("/init", PendingPaymentController.initPayment);
router.post("/webhook", PendingPaymentController.webhook);


const PendingPaymentRoutes = router;
module.exports =  PendingPaymentRoutes ;
