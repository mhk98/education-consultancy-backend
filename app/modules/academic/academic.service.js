const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Application = db.application;


const insertIntoDB = async (data) => {

  const result = await Application.create(data);

  console.log('Application', result)
  return result
};



const getAllFromDB = async () => {
  
    const result = await Application.findAll()
  
    return result
  };

  
  const getDataById = async (id) => {
  
    const result = await Profile.findOne(
     {
      where:{
        user_id:id
      }
     }
  )
  
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

    const {twelvethStartDate, twelvethEndDate, twelvethInstitution, twelvethLocation, 
      tenthStartDate, tenthEndDate, tenthInstitution, tenthLocation, iteltsWaiver, ieltsMOI} = payload;

    const data = {
      twelvethStartDate: twelvethStartDate === "" ? undefined : twelvethStartDate,
      twelvethEndDate: twelvethEndDate === "" ? undefined : twelvethEndDate,
      twelvethInstitution: twelvethInstitution === "" ? undefined : twelvethInstitution,
      twelvethLocation: twelvethLocation === "" ? undefined : twelvethLocation,
      tenthStartDate: tenthStartDate === "" ? undefined : tenthStartDate,
      tenthEndDate: tenthEndDate === "" ? undefined : tenthEndDate,
      tenthInstitution: tenthInstitution === "" ? undefined : tenthInstitution,
      tenthLocation: tenthLocation === "" ? undefined : tenthLocation,
      ieltsWaiver: iteltsWaiver === "" ? undefined : iteltsWaiver,
      ieltsMOI: ieltsMOI === "" ? undefined : ieltsMOI,
    };

    console.log("academic", data)
    
    const result = await Application.update(data,{
      where:{
        user_id:id
      }
    })
  
  
    return result
  
  };


const AcademicService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = AcademicService;