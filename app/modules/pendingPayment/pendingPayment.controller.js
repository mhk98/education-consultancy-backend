const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const PendingPaymentService = require("./pendingPayment.service");
const ApiError = require("../../../error/ApiError");


const insertIntoDB = catchAsync(async (req, res) => {

  const {amount, paymentReason, refundCondition, paymentStatus, user_id  } = req.body;

  // const filePath = req.file.path.replace(/\\/g, "/");
 

  const data = {
    amount, paymentReason, refundCondition, paymentStatus, user_id,
   file: req.file ? req.file.path : undefined
  }

  const result = await PendingPaymentService.insertIntoDB(data);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await PendingPaymentService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})

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


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await PendingPaymentService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Application update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await PendingPaymentService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Application delete successfully!!",
          data: result
      })
    })

 const PendingPaymentController = {
  getAllFromDB,
  getAllDataById,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB
}

module.exports = PendingPaymentController;