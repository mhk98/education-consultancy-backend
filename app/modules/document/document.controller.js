const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const DocumentService = require("./document.service");



const insertIntoDB = catchAsync(async (req, res) => {


  const result = await DocumentService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Documents successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await DocumentService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Documents data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await DocumentService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Documents data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await DocumentService.updateOneFromDB(id, req.files);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Documents update successfully!!",
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
          message: "Documents delete successfully!!",
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