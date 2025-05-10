const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Application = db.application;
const User = db.user;


const insertIntoDB = async (data) => {

  const {year, intake, university, program, priority, country, status, assignee, user_id} = data;

  const existingCount = await Application.count({
    where: { user_id: user_id }
  });

  const seq = existingCount + 1;
  const padded = seq.toString().padStart(2, '0');
  const acknowledgeCode = `ECA${padded}`;

  const userInfo = await User.findOne({
    id:user_id
  })

  const info = {
    year, intake, university, program, priority, country, user_id, FirstName:userInfo.FirstName,
    LastName:userInfo.LastName, assignee, status, acknowledge: acknowledgeCode
  }

  const userDataUpdate = {
    Assigned: assignee,
    Status: status,
  };
  

  await User.update(userDataUpdate, {
    where: {
      id: user_id
    }
  })

  const result = await Application.create(info);

  console.log('Application', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await Application.findAll()
  
    return result
  };
const getAllDataById = async (id) => {
  
    const result = await Application.findAll({
      where: {
        user_id:id
      }
    })
  
    return result
  };


  const deleteIdFromDB = async (id) => {
  
    const result = await Application.destroy(
      {
        where:{
          id:id
        }
      }
    )
  
    return result
  };
  
  
  const updateOneFromDB = async (id, payload) => {
    const { year, intake, university, program, priority, country, status, assignee, user_id } = payload;
  
    const userInfo = await User.findOne({
      where: { id: user_id }
    });
  
    const info = {
      year: year === "" ? undefined : year,
      intake: intake === "" ? undefined : intake,
      university: university === "" ? undefined : university,
      program: program === "" ? undefined : program,
      priority: priority === "" ? undefined : priority,
      country: country === "" ? undefined : country,
      user_id: user_id === "" ? undefined : user_id,
      FirstName: userInfo?.FirstName === "" ? undefined : userInfo?.FirstName,
      LastName: userInfo?.LastName === "" ? undefined : userInfo?.LastName,
      assignee: assignee === "" ? undefined : assignee,
      status: status === "" ? undefined : status,
    };

    const userDataUpdate = {
      Assigned: assignee,
      Status: status,
    };
    
  
    await User.update(userDataUpdate, {
      where: {
        id: user_id
      }
    })
  
    const result = await Application.update(info, {
      where: {
        id: id,
        user_id: user_id
      }
    });
  
    return result;
  };
  


const ApplicationService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getAllDataById
};

module.exports = ApplicationService;