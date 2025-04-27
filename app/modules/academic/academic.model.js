module.exports = (sequelize, DataTypes) => {

    const Academic = sequelize.define(
        "Academic",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
            },

            twelvethStartDate: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

            twelvethEndDate: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

            twelvethInstitution: {
                type: DataTypes.TEXT,
                allowNull:true
            },

            twelvethLocation: {
                type: DataTypes.TEXT,
                allowNull:true
            },
            tenthStartDate: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

            tenthEndDate: {
                type: DataTypes.DATEONLY,
                allowNull:true
            },

            tenthInstitution: {
                type: DataTypes.TEXT,
                allowNull:true
            },

            tenthLocation: {
                type: DataTypes.TEXT,
                allowNull:true
            },
            ieltsWaiver: {
                type: DataTypes.TEXT,
                allowNull:true
            },
            ieltsMOI: {
                type: DataTypes.TEXT,
                allowNull:true
            },
        }
    )

    return Academic;
}