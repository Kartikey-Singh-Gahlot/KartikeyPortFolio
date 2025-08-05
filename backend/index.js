const express = require('express');
const connectDb = require('./Models/db.js');
const Routes = require('./Routes/utilityRoutes.js');
const app = express();
const cors = require('cors');

app.use(cors({origin:"https://vercel.com/kartikey-singh-gahlots-projects-49fa3347/kartikey-portfolio-frontend"}));

connectDb().then(()=> console.log("database connected")).catch((err)=>{console.log(err)});


app.use("/",Routes);


module.exports = app;