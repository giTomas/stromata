const mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
  title: String,
  date: String,
  category: String,
  body: [{ p: String }],
  author: {firstName: String, lastName: String, authorId: String}
});
