require('dotenv').config();

const mongoose = require('mongoose');

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO);
}

module.exports = connectDb;