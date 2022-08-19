// Standard requires
const mongoose = require('mongoose');

// Library requires

// Local requires

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


module.exports = UserSchema;