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

  await PendingPayment.create({
    amount: data.amount,
    transactionId: tran_id,
    user_id: data.user_id,
    status: "PENDING",
    paymentStatus: data.paymentStatus,
    file: data.file || null,
  });

  return session?.GatewayPageURL;
};

const webhook = async (payload) => {
  if (!payload || payload.status !== 'VALID') {
    return { message: 'Invalid or failed payment' };
  }

  const result = await sslService.validate(payload);
  if (result?.status !== 'VALID') {
    return { message: 'Payment validation failed' };
  }

  const { tran_id } = result;

  await PendingPayment.update(
    {
      status: "PAID",
      paymentGatewayData: JSON.stringify(payload),
    },
    {
      where: { transactionId: tran_id },
    }
  );

  return { message: "Payment Success" };
};

module.exports = {
  initPayment,
  webhook,
};
