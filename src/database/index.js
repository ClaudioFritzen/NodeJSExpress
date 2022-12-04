const express = require('express');


const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: "../config.env"});
mongoose.Promise = global.Promise;


const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.PASSWORD,
)

mongoose.connect(DB, {
    useNewUrlParser: true,
     useMongoClient: true
})
.then(() => {
    console.log("Connected to db");
});


module.exports = mongoose




