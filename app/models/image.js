"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Image', {
  image: String,
  thumb: String,
  name: String,
  description: String
});
