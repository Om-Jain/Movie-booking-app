const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()


mongoose.connect("mongodb+srv://omjain:omjain1@cluster1.cfbnwdm.mongodb.net/"
).then(()=>app.listen(3000, () => 
    console.log("Connected to the server + port")
)
).catch(e=>console.log(e))


// app.use('/', (req,res,next) => {
//     res.send("<h1>Hey, Hi everyone</h1>");
// });


