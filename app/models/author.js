"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Author', {
  about:  String,
  quote: String,
  images: {thumb: String, img: String},
  author: {firstName: String, lastName: String, authorId: String }
});
