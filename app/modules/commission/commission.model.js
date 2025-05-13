module.exports = (sequelize, DataTypes) => {

    const Commission = sequelize.define(
        "Commission",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull:true
            },
            branch: {
                type: DataTypes.STRING,
                allowNull:true
            },            
            status: {
                type: DataTypes.STRING,
                allowNull:true,
                defaultValue:"PENDING"
            },             
            file: {
                type: DataTypes.STRING,
                allowNull:true,
            },             
                       
        }
    )

    return Commission;
}