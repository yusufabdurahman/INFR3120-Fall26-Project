// Mongoose model for a StudyHive study session.
// A schema describes what fields a document in MongoDB can have.
var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema(
  {
    title:        { type: String, required: true, trim: true },   // e.g. "Midterm review"
    course:       { type: String, required: true, trim: true },   // e.g. "INFR3120"
    topic:        { type: String, trim: true },                   // e.g. "Express routing"
    host:         { type: String, required: true, trim: true },   // name of the student hosting
    location:     { type: String, required: true, trim: true },   // room, library or online link
    date:         { type: Date, required: true },                 // day of the session
    startTime:    { type: String, required: true },               // "14:30"
    maxStudents:  { type: Number, default: 6, min: 2, max: 50 },  // capacity
    description:  { type: String, trim: true },
    status:       { type: String, enum: ['Open', 'Full', 'Completed'], default: 'Open' }
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model('Session', sessionSchema);
