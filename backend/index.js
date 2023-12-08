const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');

dotenv.config();
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Origin', 'Content-Type,Authorization');
    next();
})

//middleware section

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);


mongoose.connect("mongodb+srv://omjain:omjain1@cluster1.cfbnwdm.mongodb.net/"
).then(() => app.listen(3000, () =>
    console.log("Connected to the server + port")
)
).catch(e => console.log(e));



