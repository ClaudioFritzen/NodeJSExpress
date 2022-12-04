const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        rquired: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createedAT: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);


module.exports = User;