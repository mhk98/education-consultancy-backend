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
            firstName: {
                type: DataTypes.STRING,
                allowNull:true
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull:true
            },
              
            studyArea: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: "[]",
                get() {
                  try {
                    return JSON.parse(this.getDataValue("studyArea")) || [];
                  } catch (error) {
                    return [];
                  }
                },
                set(value) {
                  this.setDataValue("studyArea", JSON.stringify(value));
                },
              },

              studyLevel: {
                type: DataTypes.TEXT,
                allowNull: false,
                defaultValue: "[]",
                get() {
                  try {
                    return JSON.parse(this.getDataValue("studyLevel")) || [];
                  } catch (error) {
                    return [];
                  }
                },
                set(value) {
                  this.setDataValue("studyLevel", JSON.stringify(value));
                },
              },           
            file: {
                type: DataTypes.STRING,
                allowNull:true,
            },             
                       
        }
    )

    return Enquiries;
}