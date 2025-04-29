const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const StudentReplyService = require("./studentReply.service");
const { where } = require("sequelize");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await StudentReplyService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentReply successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await StudentReplyService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentReply data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await StudentReplyService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentReply data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await StudentReplyService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "StudentReply update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await StudentReplyService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "StudentReply delete successfully!!",
          data: result
      })
    })

 const AcademicController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById
}

module.exports = AcademicController;