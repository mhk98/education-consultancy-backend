const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const ApplicationService = require("./academic.service");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await ApplicationService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await ApplicationService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await ApplicationService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await ApplicationService.updateOneFromDB(id, req.body);
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
    
      const result = await ApplicationService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Application delete successfully!!",
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