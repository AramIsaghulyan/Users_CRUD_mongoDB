// Standard requires
const mongoose = require('mongoose');

// Library requires

// Local requires

const UserSchema = new mongoose.Schema({

    one: { 
        type: String, 
        required: true,
        unique: true
    },
    tow: { 
        type: String, 
        required: true,
        unique: true
    },
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

//UserSchema.index({one: 1, tow: 1}, {unique: true});

module.exports = UserSchema;