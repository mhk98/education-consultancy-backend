const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const PendingPayment = db.pendingPayment;



// const insertIntoDB = async (data) => {

//   const {  amount, paymentReason, refundCondition, paymentStatus, user_id, filePath} = data;

//   const user = await User.findOne({
//     where: {
//       id: user_id
//     }
//   });

//   if (!user) {
//     throw new ApiError(404, `User with ID ${user_id} does not exist.`);
    
//   }

//   const info = {
//     amount,
//     paymentReason,
//     refundCondition,
//     paymentStatus,
//     user_id:user.id,
//     filePath,
//   }

//   const result = await PendingPayment.create(info);

//   return result
// };

const insertIntoDB = async (data) => {

 
  const result = await PendingPayment.create(data);

  return result
};



const getAllFromDB = async () => {
  
    const result = await PendingPayment.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await PendingPayment.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await PendingPayment.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {
  
    const result = await PendingPayment.update(payload, {
      where: {
        id: id,
      }
    });
  
    return result;
  };
  


const PendingPaymentService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = PendingPaymentService;