const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const StudentCommentService = require("./studentComment.service");
const { where } = require("sequelize");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await StudentCommentService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentComment successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const {applicationId, studentcommentId} = req.params;
  const result = await StudentCommentService.getAllFromDB(applicationId, studentcommentId);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentComment data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await StudentCommentService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "StudentComment data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await StudentCommentService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "StudentComment update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await StudentCommentService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "StudentComment delete successfully!!",
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