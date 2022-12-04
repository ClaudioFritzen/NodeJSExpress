const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('./database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controller/authController')(app);

app.listen(3000);
