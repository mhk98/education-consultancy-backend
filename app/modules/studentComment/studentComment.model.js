module.exports = (sequelize, DataTypes) => {

    const StudentComment = sequelize.define(
        "StudentComment",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            comment: {
                type: DataTypes.TEXT,
                allowNull:true
            },
        }
    )

    return StudentComment;
}