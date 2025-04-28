const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const DocumentService = require("./document.service");



const insertIntoDB = catchAsync(async (req, res) => {


  const result = await DocumentService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await DocumentService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await DocumentService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await DocumentService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Tests update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await DocumentService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Tests delete successfully!!",
          data: result
      })
    })

 const DocumentController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById
}

module.exports = DocumentController;