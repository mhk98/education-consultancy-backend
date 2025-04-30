const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const StudentCommentService = require("./studentComment.service");

// Insert new comment into the database
const insertIntoDB = catchAsync(async (req, res) => {
  const result = await StudentCommentService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "StudentComment successfully created!!",
    data: result,
  });
});

// Get comments by application ID
const getDataById = catchAsync(async (req, res) => {
  const { application_id } = req.params;

  const result = await StudentCommentService.getDataById(application_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "StudentComment data fetched successfully!!",
    data: result,
  });
});

// Export the controller functions
const StudentCommentController = {
  insertIntoDB,
  getDataById,
};

module.exports = StudentCommentController;
