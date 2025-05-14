const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const KCCommentService = require("./comment.service");

// Insert new comment into the database
const insertIntoDB = catchAsync(async (req, res) => {
  const result = await KCCommentService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "KCComment successfully created!!",
    data: result,
  });
});

// Get comments by application ID
const getDataById = catchAsync(async (req, res) => {
  const { application_id } = req.params;

  const result = await KCCommentService.getDataById(application_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "KCComment data fetched successfully!!",
    data: result,
  });
});

// Export the controller functions
const KCCommentController = {
  insertIntoDB,
  getDataById,
};

module.exports = KCCommentController;
