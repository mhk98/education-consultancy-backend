const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const RequestPaymentService = require("./requestPayment.service");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await RequestPaymentService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await RequestPaymentService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})

const getAllDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await RequestPaymentService.getAllDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await RequestPaymentService.updateOneFromDB(id, req.body);
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
    
      const result = await RequestPaymentService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Application delete successfully!!",
          data: result
      })
    })

 const RequestPaymentController = {
  getAllFromDB,
  getAllDataById,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB
}

module.exports = RequestPaymentController;