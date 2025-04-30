const { Op } = require("sequelize");
const db = require("../../../models");
const StudentComment = db.studentComment;
const StudentReply = db.studentReply;
const User = db.user;

// Insert new comment
const insertIntoDB = async (data) => {
  const result = await StudentComment.create(data);
  return result;
};

// Fetch all comments for an application (with replies and user info)
const getDataById = async (application_id, type) => {
  // Build the query where condition
  const whereCondition = { application_id };

  // If the "tab" type is provided, filter by it (e.g., "kc" or "student")
  if (type) {
    whereCondition.type = type; // Assuming your `StudentComment` model has a `type` field
  }

  const result = await StudentComment.findAll({
    where: { application_id },
    include: [
      { model: User, attributes: ["id", "FirstName", "LastName"] },
      {
        model: StudentReply,
        as: "studentReplies", // <--- must match the alias used in association
        include: [{ model: User, attributes: ["id", "FirstName", "LastName"] }],
      },
    ],
    order: [["createdAt", "ASC"]],
  });
  

  return result;
};


// Placeholder in case getAllFromDB is used elsewhere
const getAllFromDB = async () => {
  return await StudentComment.findAll();
};

const StudentCommentService = {
  insertIntoDB,
  getDataById,
  getAllFromDB
};

module.exports = StudentCommentService;
