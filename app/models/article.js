"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
  title: String,
  date: String,
  category: String,
  body: [{ p: String }],
  author: {firstName: String, lastName: String, authorId: String},
  comments: [{body: String, firstName: String, lastName: String, email: String}]
});
