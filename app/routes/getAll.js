const mongoose   = require('mongoose');
const Article    = require('../models/article');
const Book       = require('../models/book');
const Art        = require('../models/art');
mongoose.Promise = require('bluebird');


module.exports = (req, res) => {
  const limit    = 3;
  const promise  = Article.find( 'articles').limit(limit).exec();
  const promise2 = Art.find('articles').limit(limit).exec();
  const promise3 = Book.find('articles').limit(limit).exec();
  const fns = [promise, promise2, promise3];

  Promise.all(fns).then( (articles) => {
      res.render('two', { pageTitle: "Index", items1: articles[0], items2: articles[1], items3: articles[2] })
    })
    .catch( (err) => {
      console.log(err);
    });
};

/*
routes.get('/', (req, res) => {
  const promise  = Article.find('articles').exec();
  const promise2 = Art.find('articles').exec();
  const promise3 = Book.find('articles').exec();
  const fns = [promise, promise2, promise3];

  Promise.all(fns).then( (articles) => {

    res.render('two', { pageTitle: "Index", items1: articles[0], items2: articles[1], items3: articles[2] })
  })
  .catch( (err) => {
    console.log(err);
  })
});*/
