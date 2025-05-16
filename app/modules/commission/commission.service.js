const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const Commission = db.commission;



const insertIntoDB = async (data) => {

  console.log("data", data)
  const result = await Commission.create(data);

  return result
};



const getAllFromDB = async () => {
  
    const result = await Commission.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await Commission.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await Commission.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {

  
  
    const result = await Commission.update(payload, {
      where: {
        id: id,
      }
    });
  
    return result;
  };
  


const CommissionService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = CommissionService;