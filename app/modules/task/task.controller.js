const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const TaskService = require("./task.service");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const User = db.user;

const insertIntoDB = catchAsync(async (req, res) => {

  const {assignor, task,  description, comment, user_id} = req.body;

  const user = await User.findOne({
    where: {
      id:user_id
    }
  })

  if(!user){
    throw new ApiError(400, "User not found")
  }

  const data = {
  
    assignor, task,  description, comment, assignedTo: `${user.FirstName} ${user.LastName}`,
    user_id,
    file: req.file ? req.file.path : undefined,

  }

  const result = await TaskService.insertIntoDB(data);
  console.log("result", result)
 
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Task successfully created!!",
      data: result
  })
})


const getAllFromDB = catchAsync(async (req, res) => {

  const result = await TaskService.getAllFromDB();
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Task data fetch!!",
      data: result
  })
})

const getAllDataById = catchAsync(async (req, res) => {

  const {user_id} = req.params;
  
  const result = await TaskService.getAllDataById(user_id);
  sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Task data fetch!!",
      data: result
  })
})


const updateOneFromDB = catchAsync(async (req, res) => {
    const {id} = req.params;

      const {assignor, assignedTo, task, description, status, user_id, comment} = req.body;
    
    
      const data = {
        assignor: assignor === "" ? undefined : assignor,
        assignedTo: assignedTo === "" ? undefined : assignedTo,
        task: task === "" ? undefined : task,
        description: description === "" ? undefined : description,
        status: status === "" ? undefined : status,
        comment: comment === "" ? undefined : comment,
        user_id: user_id === "" ? undefined : user_id,
        file: req.file ? req.file.path : undefined,
    
      }

      const result = await TaskService.updateOneFromDB(id, data);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Task update successfully!!",
          data: result
      })
    })
    
    
    const deleteIdFromDB = catchAsync(async (req, res) => {
        const {id} = req.params;
        console.log('deleteId',id)
    
      const result = await TaskService.deleteIdFromDB(id);
      sendResponse(res, {
          statusCode: 200,
          success: true,
          message: "Task delete successfully!!",
          data: result
      })
    })

 const TaskController = {
  getAllFromDB,
  getAllDataById,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB
}

module.exports = TaskController;