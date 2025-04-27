const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const ProfileService = require("./profile.service");


const insertIntoDB = catchAsync(async (req, res) => {


  const result = await ProfileService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Successfully created Profile!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await ProfileService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Profile data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {
const {id} = req.params;
  const result = await ProfileService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Profile data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
    console.log('updateOneFromDB',id)

      const result = await ProfileService.updateOneFromDB(id, req.body);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Profile update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await ProfileService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Profile delete successfully!!",
          data: result
      })
    })

 const ProfileController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById
}

module.exports = ProfileController;