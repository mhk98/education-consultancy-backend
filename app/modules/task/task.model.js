module.exports = (sequelize, DataTypes) => {

    const Task = sequelize.define(
        "Task",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            title: {
                type: DataTypes.STRING,
                allowNull:true
            },
            description: {
                type: DataTypes.STRING,
                allowNull:true
            },             
            status: {
                type: DataTypes.STRING,
                allowNull:true,
                defaultValue:"PENDING"
            },             
                       
        }
    )

    return Task;
}