const ApiError = require("../../../error/ApiError");
const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const AdditionalDocumentService = require("./additionalDocument.service");



const insertIntoDB = catchAsync(async (req, res) => {
  const { title, user_id } = req.body;

  if (!req.file) {
    throw new ApiError(400, "No file uploaded");
  }

  const filePath = req.file.path.replace(/\\/g, "/");

  const info = { title, user_id };

  const result = await AdditionalDocumentService.insertIntoDB(info, filePath);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Document successfully uploaded!",
    data: result,
  });
});



const getAllFromDB = catchAsync(async (req, res) => {

  const result = await AdditionalDocumentService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Documents data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await AdditionalDocumentService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Documents data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await AdditionalDocumentService.updateOneFromDB(id, req.files);
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
    
      const result = await AdditionalDocumentService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Documents delete successfully!!",
          data: result
      })
    })

 const AdditionalDocumentController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById
}

module.exports = AdditionalDocumentController;