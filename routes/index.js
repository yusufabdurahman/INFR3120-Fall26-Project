// Landing page route: shows the hero button and the table of study sessions.
var express = require('express');
var router = express.Router();
var Session = require('../models/session');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    // Show sessions that are still Open, soonest first. This is the "display" requirement.
    var sessions = await Session.find({ status: 'Open' }).sort({ date: 1, startTime: 1 });
    res.render('index', { title: 'StudyHive', sessions: sessions, dbError: null });
  } catch (err) {
    // If the database is unreachable, still render the page with a warning
    // instead of crashing, so the landing page always loads.
    console.error(err.message);
    res.render('index', { title: 'StudyHive', sessions: [], dbError: 'Could not load sessions from the database.' });
  }
});

module.exports = router;
