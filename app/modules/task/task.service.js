const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const Task = db.task;



const insertIntoDB = async (data) => {

  const result = await Task.create(data);

  return result
};



const getAllFromDB = async () => {
  
    const result = await Task.findAll()
  
    return result
  };
const getAllDataById = async (user_id) => {
  
    const result = await Task.findAll({
      where: {
        user_id:user_id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await Task.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, data) => {

  
    const result = await Task.update(data, {
      where: {
        id: id,
      }
    });
  
    return result;
  };
  


const TaskService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = TaskService;