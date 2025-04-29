const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const { application } = require("express");
const StudentComment = db.studentComment;
const StudentReply = db.studentReply;


const insertIntoDB = async (data) => {

  const result = await StudentComment.create(data);

  console.log('StudentComment', result)
  return result
};



// const getAllFromDB = async () => {
  
//     const studentComments = await StudentComment.findAll({
//       include: [{
//         model: StudentReply,
//       }],
//       order: [['createdAt', 'ASC']], // createdAt অনুযায়ী DESC অর্ডারে সাজানো
  
//     })


//     const result = studentComments.map(studentComment => ({
//       studentCommentId: studentComment.id,
//       applicationId: studentComment.application_id,
//       userId: studentComment.user_id,
//       studentComment: studentComment.comment,
//       studentreplies: studentComment.studentreplies?.map(studentreply => ({
//       studentCommentId: studentreply.studentComment_id,
//       applicationId: studentreply.application_id,
//       userId: studentreply.user_id,
//       studentreply: studentreply.reply,
      

//       })) || [],
//     }));
  
//     return result
//   };


const getAllFromDB = async (applicationId, studentcommentId) => {
  
    const result = await StudentComment.findAll({

      where: {
        application_id: applicationId,
        studentComment_id: studentcommentId
      }
  
    })

  
    return result
  };

  
  const getDataById = async (id) => {
  
    console.log("dataid", id)
    const result = await StudentComment.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await StudentComment.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  // const updateOneFromDB = async (id, payload) => {
    
  //   const result = await StudentComment.update(data,{
  //     where:{
  //       user_id:id
  //     }
  //   })
  
  
  //   return result
  
  // };

  // const updateOneFromDB = async () => {
  //   const studentComments = await StudentComment.findAll({
  //     include: [{
  //       model: StudentReply,
  //     }],
  //     order: [['createdAt', 'ASC']],
  //   });
  
  //   for (const comment of studentComments) {
  //     const { id: studentCommentId, application_id, user_id } = comment;
  
  //     const matchingReplies = comment.studentreplies?.filter(reply =>
  //       reply.studentComment_id === studentCommentId &&
  //       reply.application_id === application_id &&
  //       reply.user_id === user_id
  //     ) || [];
  
  //     // If there are matching replies, we could either update a field or log, depending on your DB schema.
  //     if (matchingReplies.length > 0) {
  //       // Assuming you want to update a `replies` field on StudentComment (e.g., JSON column)
  //       // If such a column doesn't exist, you can create it or process it differently.
  //   const result =    await StudentComment.update(
  //         { replies: matchingReplies.map(r => r.reply) }, // assuming "replies" is a JSON column
  //         {
  //           where: {
  //             id: studentCommentId,
  //             application_id,
  //             user_id,
  //           },
  //         }
  //       );
  //     }
  //     return result
  //   }
  
    
  // };
  


  const updateOneFromDB = async () => {
    const studentComments = await StudentComment.findAll({
      include: [{
        model: StudentReply,
      }],
      order: [['createdAt', 'ASC']],
    });
  
    const updateResults = [];
  
    for (const comment of studentComments) {
      const { id: studentCommentId, application_id, user_id } = comment;
  
      const matchingReplies = comment.studentreplies?.filter(reply =>
        reply.studentComment_id === studentCommentId &&
        reply.application_id === application_id &&
        reply.user_id === user_id
      ) || [];
  
      if (matchingReplies.length > 0) {
        const result = await StudentComment.update(
          { replies: matchingReplies.map(r => r.reply) }, // assuming "replies" is a JSON column
          {
            where: {
              id: studentCommentId,
              application_id,
              user_id,
            },
          }
        );
  
        updateResults.push({ studentCommentId, result });
      }
    }
  
    return updateResults; // return all update results
  };
  

  // const updateOneFromDB1 = async (req, res) => {
  //   const { applicationId, commentId, userId } = req.params;
  
  //     const comment = await StudentComment.findOne({
  //       where: {
  //         id: commentId,
  //         application_id: applicationId,
  //         user_id: userId,
  //       },
  //       include: [{
  //         model: StudentReply,
  //       }],
  //     });
  
  //     if (!comment) {
  //       return res.status(404).json({ message: "Comment not found" });
  //     }
  

  //     const matchingReplies = comment.studentreplies?.filter(reply =>
  //       reply.studentComment_id === comment.id &&
  //       reply.application_id === comment.application_id &&
  //       reply.user_id === comment.user_id
  //     ) || [];
  
  //   const updateResults = [];

  //     if (matchingReplies.length > 0) {
  // const result =      await StudentComment.update(
  //         { replies: matchingReplies.map(r => r.reply) }, // assuming replies is a JSON/text column
  //         {
  //           where: {
  //             id: commentId,
  //             application_id: applicationId,
  //             user_id: userId,
  //           },
  //         }
  //       );
  
  //       updateResults.push(result)
  //     } 
   
  // };
  


  const updateCommentReplies = async (applicationId, commentId, userId) => {
    const comment = await StudentComment.findOne({
      where: {
        id: commentId,
        application_id: applicationId,
        user_id: userId,
      },
      include: [{
        model: StudentReply,
      }],
    });
  
    if (!comment) {
      throw new Error('Comment not found');
    }
  
    const matchingReplies = comment.studentreplies?.filter(reply =>
      reply.studentComment_id === comment.id &&
      reply.application_id === comment.application_id &&
      reply.user_id === comment.user_id
    ) || [];
  
    if (matchingReplies.length === 0) {
      throw new Error('No matching replies found');
    }
  
    const repliesData = matchingReplies.map(r => r.reply);
  
    const result = await StudentComment.update(
      { replies: repliesData },
      {
        where: {
          id: commentId,
          application_id: applicationId,
          user_id: userId,
        },
      }
    );
  
    if (result[0] === 0) {
      throw new Error('Failed to update the comment');
    }
  
    return result;
  };
const StudentCommentService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = StudentCommentService;