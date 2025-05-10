module.exports = (sequelize, DataTypes) => {

    const RequestPayment = sequelize.define(
        "RequestPayment",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            amount: {
                type: DataTypes.STRING,
                allowNull:true
            },
            paymentReason: {
                type: DataTypes.STRING,
                allowNull:true
            },
            refundCondition: {
                type: DataTypes.STRING,
                allowNull:true
            },       
            note: {
                type: DataTypes.TEXT,
                allowNull:true
            },       
        }
    )

    return RequestPayment;
}