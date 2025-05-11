const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const PendingPaymentService = require("./pendingPayment.service");

const initPayment = catchAsync(async (req, res) => {
  const { amount, paymentStatus, employee, user_id } = req.body;

  const data = {
    amount,
    paymentStatus,
    user_id,
    employee,
    file: req.file ? req.file.path : undefined,
  };

  const result = await PendingPaymentService.initPayment(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payment initialized successfully",
    data: result,
  });
});

const webhook = catchAsync(async (req, res) => {
  const result = await PendingPaymentService.webhook(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payment validated successfully",
    data: result,
  });
});

const getAllDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await PendingPaymentService.getAllDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})

module.exports = {
  initPayment,
  webhook,
  getAllDataById
};
