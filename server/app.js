var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // cors require


var usersRouter = require('./routes/users');
const petsRoutes = require('./routes/pets');

var app = express();
app.use(cors()) // CORS middleware useage

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/pets', petsRoutes);

module.exports = app;
