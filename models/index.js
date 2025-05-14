// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const db = require("../db/db");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { DataTypes } = require("sequelize");

// // Define models
// db.user = require("../app/modules/user/user.model")(db.sequelize, DataTypes);
// db.profile = require("../app/modules/profile/profile.model")(db.sequelize, DataTypes);
// db.application = require("../app/modules/application/application.model")(db.sequelize, DataTypes);
// db.academic = require("../app/modules/academic/academic.model")(db.sequelize, DataTypes);
// db.tests = require("../app/modules/tests/tests.model")(db.sequelize, DataTypes);
// db.document = require("../app/modules/document/document.model")(db.sequelize, DataTypes);
// db.studentComment = require("../app/modules/studentComment/studentComment.model")(db.sequelize, DataTypes);
// db.studentReply = require("../app/modules/studentReply/studentReply.model")(db.sequelize, DataTypes);


// db.studentComment.hasMany(db.studentReply, {
//   foreignKey: "studentComment_id",
//   as: "studentReplies", // <-- Make sure alias is camelCase and consistent
// });
// db.studentReply.belongsTo(db.studentComment, {
//   foreignKey: "studentComment_id",
//   as: "studentComment",
// });



// //Realtion for product table

// db.user.hasMany(db.profile, { foreignKey: "user_id" });
// db.profile.belongsTo(db.user, { foreignKey: "user_id" });

// db.user.hasMany(db.application, { foreignKey: "user_id" });
// db.application.belongsTo(db.user, { foreignKey: "user_id" });

// db.user.hasMany(db.document, { foreignKey: "user_id" });
// db.document.belongsTo(db.user, { foreignKey: "user_id" });

// db.user.hasMany(db.academic, { foreignKey: "user_id" });
// db.academic.belongsTo(db.user, { foreignKey: "user_id" });

// db.user.hasMany(db.tests, { foreignKey: "user_id" });
// db.tests.belongsTo(db.user, { foreignKey: "user_id" });

// db.user.hasMany(db.studentComment, { foreignKey: "user_id" });
// db.studentComment.belongsTo(db.user, { foreignKey: "user_id" });

// db.application.hasMany(db.studentComment, { foreignKey: "application_id" });
// db.studentComment.belongsTo(db.application, { foreignKey: "application_id" });

// db.user.hasMany(db.studentReply, { foreignKey: "user_id" });
// db.studentReply.belongsTo(db.user, { foreignKey: "user_id" });

// // db.application.hasMany(db.studentReply, { foreignKey: "application_id" });
// // db.studentReply.belongsTo(db.application, { foreignKey: "application_id" });

// db.studentComment.hasMany(db.studentReply, { foreignKey: "studentComment_id" });
// db.studentReply.belongsTo(db.studentComment, { foreignKey: "studentComment_id" });




// // Sync the database
// db.sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Connection re-synced successfully");
//   })
//   .catch((err) => {
//     console.error("Error on re-sync:", err);
//   });

// module.exports = db;



// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

// Define models
db.user = require("../app/modules/user/user.model")(db.sequelize, DataTypes);
db.profile = require("../app/modules/profile/profile.model")(db.sequelize, DataTypes);
db.application = require("../app/modules/application/application.model")(db.sequelize, DataTypes);
db.academic = require("../app/modules/academic/academic.model")(db.sequelize, DataTypes);
db.tests = require("../app/modules/tests/tests.model")(db.sequelize, DataTypes);
db.document = require("../app/modules/document/document.model")(db.sequelize, DataTypes);
db.studentComment = require("../app/modules/studentComment/studentComment.model")(db.sequelize, DataTypes);
db.studentReply = require("../app/modules/studentReply/studentReply.model")(db.sequelize, DataTypes);
db.kcComment = require("../app/modules/kcComment/kcComment.model")(db.sequelize, DataTypes);
db.kcReply = require("../app/modules/kcReply/kcReply.model")(db.sequelize, DataTypes);
db.document = require("../app/modules/document/document.model")(db.sequelize, DataTypes);
db.additionalDocument = require("../app/modules/additionalDocument/additionalDocument.model")(db.sequelize, DataTypes);
db.programYear = require("../app/modules/programYear/programYear.model")(db.sequelize, DataTypes);
db.programCountry = require("../app/modules/programCountry/programCountry.model")(db.sequelize, DataTypes);
db.programIntake = require("../app/modules/programIntake/programIntake.model")(db.sequelize, DataTypes);
db.programName = require("../app/modules/programName/programName.model")(db.sequelize, DataTypes);
db.programUniversity = require("../app/modules/programUniversity/programUniversity.model")(db.sequelize, DataTypes);
db.requestPayment = require("../app/modules/requestPayment/requestPayment.model")(db.sequelize, DataTypes);
db.pendingPayment = require("../app/modules/pendingPayment/pendingPayment.model")(db.sequelize, DataTypes);
db.payment = require("../app/modules/payment/payment.model")(db.sequelize, DataTypes);
db.cashIn = require("../app/modules/cashIn/cashIn.model")(db.sequelize, DataTypes);
db.cashOut = require("../app/modules/cashOut/cashOut.model")(db.sequelize, DataTypes);
db.enquiries = require("../app/modules/enquiries/enquiries.model")(db.sequelize, DataTypes);
db.commission = require("../app/modules/commission/commission.model")(db.sequelize, DataTypes);

// ✅ StudentComment - StudentReply association (WITH correct alias)
db.studentComment.hasMany(db.studentReply, {
  foreignKey: "studentComment_id",
  as: "studentReplies", // Must match the alias used in your include
});
db.studentReply.belongsTo(db.studentComment, {
  foreignKey: "studentComment_id",
  as: "studentComment",
});


db.kcComment.hasMany(db.kcReply, {
  foreignKey: "kcComment_id",
  as: "kcReplies", // Must match the alias used in your include
});
db.kcReply.belongsTo(db.kcComment, {
  foreignKey: "kcComment_id",
  as: "kcComment",
});

// 🔁 User associations
db.user.hasMany(db.profile, { foreignKey: "user_id" });
db.profile.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.application, { foreignKey: "user_id" });
db.application.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.document, { foreignKey: "user_id" });
db.document.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.additionalDocument, { foreignKey: "user_id" });
db.additionalDocument.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.academic, { foreignKey: "user_id" });
db.academic.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.tests, { foreignKey: "user_id" });
db.tests.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.studentComment, { foreignKey: "user_id" });
db.studentComment.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.studentReply, { foreignKey: "user_id" });
db.studentReply.belongsTo(db.user, { foreignKey: "user_id" });

// 🔁 Application associations
db.application.hasMany(db.studentComment, { foreignKey: "application_id" });
db.studentComment.belongsTo(db.application, { foreignKey: "application_id" });

db.user.hasMany(db.kcComment, { foreignKey: "user_id" });
db.kcComment.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.kcReply, { foreignKey: "user_id" });
db.kcReply.belongsTo(db.user, { foreignKey: "user_id" });

// 🔁 Application associations
db.application.hasMany(db.kcComment, { foreignKey: "application_id" });
db.kcComment.belongsTo(db.application, { foreignKey: "application_id" });

db.user.hasMany(db.pendingPayment, { foreignKey: "user_id" });
db.pendingPayment.belongsTo(db.user, { foreignKey: "user_id" });

// db.requestPayment.hasMany(db.pendingPayment, { foreignKey: "requestPayment_id" });
// db.pendingPayment.belongsTo(db.requestPayment, { foreignKey: "requestPayment_id" });

db.user.hasMany(db.requestPayment, { foreignKey: "user_id" });
db.requestPayment.belongsTo(db.user, { foreignKey: "user_id" });


// ❌ Removed redundant duplicate `studentComment` - `studentReply` mapping
// (already defined above)

// ✅ Sync the database
db.sequelize
  .sync({ force: false }) // don't use `force: true` in production
  .then(() => {
    console.log("Connection re-synced successfully");
  })
  .catch((err) => {
    console.error("Error on re-sync:", err);
  });

module.exports = db;
