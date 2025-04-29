// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

// Define models
db.user = require("../app/modules/user/user.model")(db.sequelize, DataTypes);
db.profile = require("../app/modules/profile/profile.model")(db.sequelize, DataTypes);
db.application = require("../app/modules/application/application.model")(db.sequelize, DataTypes);
db.document = require("../app/modules/document/document.model")(db.sequelize, DataTypes);
db.academic = require("../app/modules/academic/academic.model")(db.sequelize, DataTypes);
db.tests = require("../app/modules/tests/tests.model")(db.sequelize, DataTypes);
db.document = require("../app/modules/document/document.model")(db.sequelize, DataTypes);
db.studentComment = require("../app/modules/studentComment/studentComment.model")(db.sequelize, DataTypes);
db.studentReply = require("../app/modules/studentReply/studentReply.model")(db.sequelize, DataTypes);


//Realtion for product table

db.user.hasMany(db.profile, { foreignKey: "user_id" });
db.profile.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.application, { foreignKey: "user_id" });
db.application.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.document, { foreignKey: "user_id" });
db.document.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.academic, { foreignKey: "user_id" });
db.academic.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.tests, { foreignKey: "user_id" });
db.tests.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.studentComment, { foreignKey: "user_id" });
db.studentComment.belongsTo(db.user, { foreignKey: "user_id" });

db.application.hasMany(db.studentComment, { foreignKey: "application_id" });
db.studentComment.belongsTo(db.application, { foreignKey: "application_id" });

db.user.hasMany(db.studentReply, { foreignKey: "user_id" });
db.studentReply.belongsTo(db.user, { foreignKey: "user_id" });

db.application.hasMany(db.studentReply, { foreignKey: "application_id" });
db.studentReply.belongsTo(db.application, { foreignKey: "application_id" });

db.studentComment.hasMany(db.studentReply, { foreignKey: "studentComment_id" });
db.studentReply.belongsTo(db.studentComment, { foreignKey: "studentComment_id" });




// Sync the database
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection re-synced successfully");
  })
  .catch((err) => {
    console.error("Error on re-sync:", err);
  });

module.exports = db;
