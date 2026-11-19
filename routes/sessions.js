// Routes for creating study sessions (the "create" requirement).
var express = require('express');
var router = express.Router();
var Session = require('../models/session');

/* GET /sessions/new - shows the empty create form. */
router.get('/new', function (req, res) {
  res.render('create', { title: 'Create a Session', error: null, form: {} });
});

/* POST /sessions - receives the form and saves a new session in MongoDB. */
router.post('/', async function (req, res) {
  try {
    await Session.create({
      title: req.body.title,
      course: req.body.course,
      topic: req.body.topic,
      host: req.body.host,
      location: req.body.location,
      date: req.body.date,
      startTime: req.body.startTime,
      maxStudents: req.body.maxStudents,
      description: req.body.description
    });
    // Redirect to the home page so the new session shows in the table
    res.redirect('/');
  } catch (err) {
    // Validation failed or DB error: show the form again with the values the user typed
    res.status(400).render('create', {
      title: 'Create a Session',
      error: err.message,
      form: req.body
    });
  }
});

module.exports = router;
