module.exports = (sequelize, DataTypes) => {

    const ProgramUniversity = sequelize.define(
        "ProgramUniversity",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            university: {
                type: DataTypes.TEXT,
                allowNull:true
            },

        }
    )

    return ProgramUniversity;
}