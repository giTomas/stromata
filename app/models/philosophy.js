"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Philosophy', {
  title: String,
  date: String,
  category: String,
  body: [{ p: String }, { h: String }],
  author: {firstName: String, lastName: String, authorId: String},
  comments: [{body: String, name: String, date: Date }]
});
