const { Op } = require("sequelize");
const db = require("../../../models");
const Comment = db.comment;
const Reply = db.reply;
const User = db.user;

// Insert new comment
const insertIntoDB = async (data) => {
  const result = await Comment.create(data);
  return result;
};

// Fetch all comments for an application (with replies and user info)
const getDataById = async (enquiry_id, type) => {
  // Build the query where condition
  const whereCondition = { enquiry_id };

  // If the "tab" type is provided, filter by it (e.g., "kc" or "student")
  if (type) {
    whereCondition.type = type; // Assuming your `Comment` model has a `type` field
  }

  const result = await Comment.findAll({
    where: { enquiry_id },
    include: [
      { model: User, attributes: ["id", "FirstName", "LastName"] },
      {
        model: Reply,
        as: "replies", // <--- must match the alias used in association
        include: [{ model: User, attributes: ["id", "FirstName", "LastName"] }],
      },
    ],
    order: [["createdAt", "ASC"]],
  });
  

  return result;
};


// Placeholder in case getAllFromDB is used elsewhere
const getAllFromDB = async () => {
  return await Comment.findAll();
};

const CommentService = {
  insertIntoDB,
  getDataById,
  getAllFromDB
};

module.exports = CommentService;
