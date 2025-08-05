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
  experienceTitles: {
    type: [String],
    required: true,
  },
  experienceDescriptions: {
    type: [[String]], 
    required: true,
  },
  projectDescriptions: {
    type: [String],
    required: true,
  },
  contactDescription: {
    type: String,
    required: true,
  }
});


module.exports = new mongoose.model("description", descriptionSchema);