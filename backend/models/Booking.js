const mongoose = require('mongoose');
const BookingSchema = new mongoose.schema[{
    movie: {
        type: mongoose.Types.ObjectId,
        ref: "Movies",
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: Number,
        ref: 'Movies'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    }
}];


const Booking = mongoose.model('Booking', BookingSchema)
module.exports = booking;