const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const sslService = require("../ssl/ssl.service");
const { where } = require("sequelize");

const PendingPayment = db.pendingPayment;
const User = db.user;
const Profile = db.profile;

const generateTransactionId = () => `TXN-${Date.now()}`;

const initPayment = async (data) => {
  const user = await User.findOne({
    where: {
      id:data.user_id
    }
  });
  if (!user) throw new ApiError(404, "User not found");

  const profile = await Profile.findOne({ where: { user_id: data.user_id } });
  if (!profile) throw new ApiError(404, "User profile not found");

  const tran_id = generateTransactionId();

  const session = await sslService.initPayment({
    total_amount: data.amount,
    tran_id,
    cus_name: `${user.FirstName} ${user.LastName}`,
    cus_email: user.Email,
    cus_add1: profile.mailingAddress1,
    cus_phone: user.Phone,
  });

  if(data.paymentStatus === "Offline"){
    await PendingPayment.create({
      amount: data.amount,
      transactionId: tran_id,
      user_id: data.user_id,
      status: "PAID",
      employee: data.employee,
      paymentStatus: data.paymentStatus,
      file: data.file || null,
    });
  } else {
    await PendingPayment.create({
      amount: data.amount,
      transactionId: tran_id,
      user_id: data.user_id,
      status: "PENDING",
      paymentStatus: data.paymentStatus,
    });
  }

  

  return session?.GatewayPageURL;
};

// const webhook = async (payload) => {
//   if (!payload || payload.status !== 'VALID') {
//     return { message: 'Invalid or failed payment' };
//   }

//   const result = await sslService.validate(payload);
//   if (result?.status !== 'VALID') {
//     return { message: 'Payment validation failed' };
//   }

//   const { tran_id } = result;

// const paymentStatus =  await PendingPayment.update(
//     {
//       status: "PAID",
//       paymentGatewayData: JSON.stringify(payload),
//     },
//     {
//       where: { transactionId: tran_id },
//     }
//   );


//   if(paymentStatus.status === "PAID") {
//     await RequestPayment.update(
//       {
//       status: "PAID"
//     },
//     {
//       where: {
//         id:requrestPayment_id,
//         user_id:
//       }
//     }
//   )
//   }

//   return { message: "Payment Success" };
// };



const webhook = async (payload) => {
  if (!payload || payload.status !== 'VALID') {
    return { message: 'Invalid or failed payment' };
  }

  const result = await sslService.validate(payload);
  if (result?.status !== 'VALID') {
    return { message: 'Payment validation failed' };
  }

  const { tran_id } = result;

  // Find the pending payment record
  const pendingPayment = await PendingPayment.findOne({
    where: { transactionId: tran_id },
  });

  if (!pendingPayment) {
    return { message: 'Transaction not found in system' };
  }

  // Update the pending payment to PAID
  await PendingPayment.update(
    {
      status: 'PAID',
      paymentGatewayData: JSON.stringify(payload),
    },
    {
      where: { transactionId: tran_id },
    }
  );

  // If related to RequestPayment, update that too
  // if (pendingPayment.requestPayment_id && pendingPayment.user_id) {
  //   await RequestPayment.update(
  //     { status: 'PAID' },
  //     {
  //       where: {
  //         id: pendingPayment.requestPayment_id,
  //         user_id: pendingPayment.user_id,
  //       },
  //     }
  //   );
  // }

  return { message: 'Payment Success' };
};


const getAllDataById = async (id) => {
  
    const result = await PendingPayment.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };

module.exports = {
  initPayment,
  webhook,
  getAllDataById

};
