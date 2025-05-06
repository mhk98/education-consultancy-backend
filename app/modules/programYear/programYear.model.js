module.exports = (sequelize, DataTypes) => {

    const ProgramYear = sequelize.define(
        "ProgramYear",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            year: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

        }
    )

    return ProgramYear;
}