const descriptionModel = require('../Models/collections.js')

const getAll =async (req, res)=>{
  let data =  await descriptionModel.findOne({_id:"68920c98aac0d0eb2d848fdf"});
  res.status(200).json({
    status : true,
    body : data
  });
}

module.exports = {getAll};