const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
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

const initPayment = async () => {

  try {
    const data = {
      total_amount: 100,
      currency: 'BDT',
      tran_id: 'REF123', // use unique tran_id for each api call
      success_url: 'http://localhost:3030/success',
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
  };
  } catch (error) {
    throw new ApiError(400,  'Payment Error')
  }

  const result = await PendingPayment.create(data);

  return result
};


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