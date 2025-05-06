module.exports = (sequelize, DataTypes) => {

    const ProgramCountry = sequelize.define(
        "ProgramCountry",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            country: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

        }
    )

    return ProgramCountry;
}