const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const KCReply = db.kcReply;


const insertIntoDB = async (data) => {

  const result = await KCReply.create(data);

  console.log('KCReply', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await KCReply.findAll()
  
    return result
  };

  
  const getDataById = async (id) => {
  
    console.log("dataid", id)
    const result = await KCReply.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await KCReply.destroy(
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
    
    const result = await KCReply.update(data,{
      where:{
        user_id:id
      }
    })
  
  
    return result
  
  };


const KCReplyService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = KCReplyService;