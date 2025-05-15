const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const Task = db.task;



const insertIntoDB = async (data) => {

  console.log("data", data)
  const result = await Task.create(data);

  return result
};



const getAllFromDB = async () => {
  
    const result = await Task.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await Task.findAll({
      where: {
        user_id:id
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
  
  
  const updateOneFromDB = async (id, payload) => {

  
  const {title, description, status, user_id, } = payload;


  const data = {
    title: title === "" ? undefined : title,
    description: description === "" ? undefined : description,
    status: status === "" ? undefined : status,
    user_id: user_id === "" ? undefined : user_id,

  }
  
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