module.exports = (sequelize, DataTypes) => {

    const Enquiries = sequelize.define(
        "Enquiries",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            FirstName: {
                type: DataTypes.STRING,
                allowNull:true
            },
            LastName: {
                type: DataTypes.STRING,
                allowNull:true
            },
            year: {
                type: DataTypes.STRING,
                allowNull:true
            },
            acknowledge: {
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
            priority: {
                type: DataTypes.STRING,
                allowNull:true
            },
            country: {
                type: DataTypes.STRING,
                allowNull:true
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'Application submitted' // ← your default value here
              },
              
            assignee: {
                type: DataTypes.STRING,
                allowNull:true
            },
         
     
  
        }
    )

    return Enquiries;
}