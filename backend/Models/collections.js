const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
mainLogo: {
    type: String,
    required: true,
  },
  welcomeText: {
    type: String,
    required: true,
  },
  introText: {
    type: String,
    required: true,
  },
  aboutDescription: {
    type: String,
    required: true,
  },
  experience: [
    {
      title: { type: String, required: true },
      description: { type: [String],  required: true},
    },
  ],
  project : [
    {
      title : { type : String, required : true },
      description : {type : [String], required: true}
    }
  ],
  contactDescription: {
    type: String,
    required: true,
  },
});


module.exports = new mongoose.model("description", descriptionSchema);