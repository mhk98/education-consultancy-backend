module.exports = (sequelize, DataTypes) => {

    const ProgramIntake = sequelize.define(
        "ProgramIntake",
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

    return ProgramIntake;
}