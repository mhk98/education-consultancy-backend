const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Application = db.application;


const insertIntoDB = async (data) => {

  const result = await Application.create(data);

  console.log('Application', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await Application.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await Application.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await Application.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {
   
    const result = await Application.update(payload,{
      where:{
        id:id
      }
    })
  
  
    return result
  
  };


const ApplicationService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = ApplicationService;