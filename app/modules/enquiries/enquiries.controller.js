const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const EnquiriesService = require("./enquiries.service");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await EnquiriesService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Enquiries successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await EnquiriesService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Enquiries data fetch!!",
      data: result
  })
})

const getAllDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await EnquiriesService.getAllDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Enquiries data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await EnquiriesService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Enquiries update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await EnquiriesService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Enquiries delete successfully!!",
          data: result
      })
    })

 const EnquiriesController = {
  getAllFromDB,
  getAllDataById,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB
}

module.exports = EnquiriesController;