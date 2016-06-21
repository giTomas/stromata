"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Art', {
  title: String,
  date: String,
  category: String,
  body: [{ p: String }, { h: String }],
  author: {firstName: String, lastName: String, authorId: String}
});
