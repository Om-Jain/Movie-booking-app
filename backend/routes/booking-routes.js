const express = require('express');
const bookingRouter = express.Router();
// const {getAllUser} = require('../controllers/admin-controller');

bookingRouter.post("/", Booking);
bookingRouter.delete('/:id', deleteBooking);
 
module.exports = bookingRouter; 