const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const RequestPayment = db.requestPayment;



const insertIntoDB = async (data) => {

  const result = await RequestPayment.create(data);

  return result
};



const getAllFromDB = async () => {
  
    const result = await RequestPayment.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await RequestPayment.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await RequestPayment.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {

  
  
  
    const result = await RequestPayment.update(payload, {
      where: {
        id: id,
      }
    });
  
    return result;
  };
  


const RequestPaymentService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = RequestPaymentService;