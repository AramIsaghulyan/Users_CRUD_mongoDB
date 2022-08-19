//Standard requires
const express = require('express');

//Local requires
const userController = require('./controller/UserController');

const app = express();

app.use(express.json());
app.use('/user', userController);

module.exports = app;