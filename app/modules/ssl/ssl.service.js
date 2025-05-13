const axios = require("axios");
const ApiError = require("../../../error/ApiError");

const initPayment = async (payload) => {
  try {
    const data = {
      store_id: process.env.store_id,
      store_passwd: process.env.store_passwd,
      total_amount: payload.total_amount,
      currency: 'BDT',
      tran_id: payload.tran_id,
      success_url: 'https://demo.eaconsultancy.info/payments?status=success',
      fail_url: 'https://demo.eaconsultancy.info/payments?status=error',
      cancel_url: 'https://demo.eaconsultancy.info/payments?status=cancel',
      ipn_url: 'https://education-consultancy-backend.onrender.com/api/v1/pendingPayment/webhook', // backend IPN/webhook
      shipping_method: 'NO',
      product_name: 'Semester Payment',
      product_category: 'Education',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'customer@example.com',
      cus_add1: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    };

    const response = await axios.post(process.env.sslPaymentUrl, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return response.data;
  } catch (error) {
    console.log("error", error)
    throw new ApiError(400, 'Payment Initialization Failed');
  }
};

const validate = async (data) => {
  try {
    const validationUrl = `${process.env.sslValidationUrl}?val_id=${data.val_id}&store_id=${process.env.store_id}&store_passwd=${process.env.store_passwd}&format=json`;

    const response = await axios.get(validationUrl);
    return response.data;
  } catch (error) {
    throw new ApiError(400, 'Payment Validation Failed');
  }
};

module.exports = {
  initPayment,
  validate,
};
