module.exports = (sequelize, DataTypes) => {

    const Application = sequelize.define(
        "Application",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            year: {
                type: DataTypes.STRING,
                allowNull:true
            },
            intake: {
                type: DataTypes.STRING,
                allowNull:true
            },
            university: {
                type: DataTypes.STRING,
                allowNull:true
            },
            program: {
                type: DataTypes.STRING,
                allowNull:true
            },
         
     
  
        }
    )

    return Application;
}