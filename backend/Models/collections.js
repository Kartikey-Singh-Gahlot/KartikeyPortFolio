const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  experience: [
    {
      title: { type: String, required: true },
      description: { type: [String],  required: true},
    },
  ],
  project : [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      link: { type: String },
      src: { type: String },
      techUsed: { type: [String], default: [] }
    }

  ]
});


module.exports = new mongoose.model("description", descriptionSchema);