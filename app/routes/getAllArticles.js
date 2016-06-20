const mongoose   = require('mongoose');
const Article    = require('../models/article');
mongoose.Promise = require('bluebird');

module.exports = (req, res) => {
  const promise = Article.find( 'articles').exec();

  promise.then( (articles) => {
    res.render('index', { pageTitle: "Index", items: articles })
  })
  .catch( (err) => {
    console.log(err);
  });
};
