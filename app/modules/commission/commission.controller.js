const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const CommissionService = require("./commission.service");


const insertIntoDB = catchAsync(async (req, res) => {
  const { amount, branch, user_id, purpose } = req.body;

  const data = {
    amount,
    user_id,
    purpose,
    branch
  };

  const result = await CommissionService.insertIntoDB(data);
  console.log("result", result)
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await CommissionService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})

const getAllDataById = catchAsync(async (req, res) => {

  const {id} = req.params;
  
  const result = await CommissionService.getAllDataById(id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Application data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;
    const { amount, branch, user_id, status, purpose } = req.body;

  const data = {
    amount: amount === "" ? undefined : amount,
    user_id: user_id === "" ? undefined : user_id,
    branch: branch === "" ? undefined : branch,
    status: status === "" ? undefined : status,
    purpose: purpose === "" ? undefined : purpose,
    file: req.file ? req.file.path : undefined,

  };

  console.log("commission", req.body)
  console.log("commissionId", id)
      const result = await CommissionService.updateOneFromDB(id, data);
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
    
      const result = await CommissionService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Application delete successfully!!",
          data: result
      })
    })

 const CommissionController = {
  getAllFromDB,
  getAllDataById,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB
}

module.exports = CommissionController;