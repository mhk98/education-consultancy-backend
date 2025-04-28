const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const TestsService = require("./tests.service");



const insertIntoDB = catchAsync(async (req, res) => {


  const result = await TestsService.insertIntoDB(req.body);
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await TestsService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests data fetch!!",
      data: result
  })
})

const getDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await TestsService.getDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tests data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
      const result = await TestsService.updateOneFromDB(id, req.body);
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
    
      const result = await TestsService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Tests delete successfully!!",
          data: result
      })
    })

 const TestsController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById
}

module.exports = TestsController;