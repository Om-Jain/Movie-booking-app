const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minLength: 6
    },
    addedMovie: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movies'
    }]
});


const admin = mongoose.model('admin', AdminSchema)
module.exports = admin;