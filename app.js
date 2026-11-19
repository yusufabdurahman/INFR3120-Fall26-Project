// Load variables from the .env file (MONGODB_URI etc.) BEFORE anything else.
// The .env file is in .gitignore so the database password never reaches GitHub.
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var sessionsRouter = require('./routes/sessions');

var app = express();

// ---- Database connection (MongoDB Atlas via Mongoose) ----
// If MONGODB_URI is missing, the site still starts so we can see a helpful message.
if (!process.env.MONGODB_URI) {
  console.warn('MONGODB_URI is not set. Copy .env.example to .env and add your Atlas connection string.');
} else {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(function () { console.log('Connected to MongoDB'); })
    .catch(function (err) { console.error('MongoDB connection error:', err.message); });
}

// ---- View engine setup (EJS) ----
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ---- Middleware (all from the express-generator template) ----
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // lets us read <form> POST data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ---- Routes ----
app.use('/', indexRouter);
app.use('/sessions', sessionsRouter);

// Anything not matched above becomes a 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler: shows views/error.ejs
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
