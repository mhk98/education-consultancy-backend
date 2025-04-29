module.exports = (sequelize, DataTypes) => {

    const StudentReply = sequelize.define(
        "StudentReply",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            reply: {
                type: DataTypes.TEXT,
                allowNull:true
            },
        }
    )

    return StudentReply;
}