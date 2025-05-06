const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const ProgramUniversity = db.programUniversity;


const insertIntoDB = async (data) => {

  const result = await ProgramUniversity.create(data);

  console.log('Application', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await ProgramUniversity.findAll()
  
    return result
  };

  
  const getDataById = async (id) => {
  
    console.log("dataid", id)
    const result = await ProgramUniversity.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await ProgramUniversity.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {

    
    const result = await ProgramUniversity.update(payload,{
      where:{
        id:id
      }
    })
  
  
    return result
  
  };


const ProgramUniversityService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = ProgramUniversityService;