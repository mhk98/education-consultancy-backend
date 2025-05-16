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
            assignor: {
                type: DataTypes.STRING,
                allowNull:true
            },
            assignedTo: {
                type: DataTypes.STRING,
                allowNull:true
            },
            task: {
                type: DataTypes.STRING,
                allowNull:true
            },             
            description: {
                type: DataTypes.TEXT,
                allowNull:true
            },             
            file: {
                type: DataTypes.STRING,
                allowNull:true
            },             
            status: {
                type: DataTypes.STRING,
                allowNull:true,
                defaultValue:"PENDING"
            },  
            comment: {
                type: DataTypes.STRING,
                allowNull:true
            },            
                       
        }
    )

    return Task;
}