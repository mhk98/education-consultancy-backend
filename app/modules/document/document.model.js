module.exports = (sequelize, DataTypes) => {

    const Doccument = sequelize.define(
        "Doccument",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },
            tenth: {
                type: DataTypes.STRING,
                allowNull:true
            },
            twelve: {
                type: DataTypes.STRING,
                allowNull:true
            },
            passport: {
                type: DataTypes.STRING,
                allowNull:true
            },
            recommendationLetter : {
                type: DataTypes.STRING,
                allowNull:true
            },
        }
    )

    return Doccument;
}