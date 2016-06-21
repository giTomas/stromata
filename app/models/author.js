"use strict";

const mongoose = require('mongoose');

module.exports = mongoose.model('Author', {
  body: [{ p: String }],
  author: {firstName: String, lastName: String, authorId: String}
});
