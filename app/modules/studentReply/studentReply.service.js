const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const StudentReply = db.studentReply;


const insertIntoDB = async (data) => {

  const result = await StudentReply.create(data);

  console.log('StudentReply', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await StudentReply.findAll()
  
    return result
  };

  
  const getDataById = async (id) => {
  
    console.log("dataid", id)
    const result = await StudentReply.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await StudentReply.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {

    console.log("academic", data)
    
    const result = await StudentReply.update(data,{
      where:{
        user_id:id
      }
    })
  
  
    return result
  
  };


const StudentReplyService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = StudentReplyService;