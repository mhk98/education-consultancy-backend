const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Reply = db.reply;


const insertIntoDB = async (data) => {

  const result = await Reply.create(data);

  console.log('Reply', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await Reply.findAll()
  
    return result
  };

  
  const getDataById = async (id) => {
  
    console.log("dataid", id)
    const result = await Reply.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await Reply.destroy(
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
    
    const result = await Reply.update(data,{
      where:{
        user_id:id
      }
    })
  
  
    return result
  
  };


const ReplyService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = ReplyService;