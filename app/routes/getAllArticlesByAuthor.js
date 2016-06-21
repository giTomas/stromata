"use strict";

const mongoose   = require('mongoose');
const Article    = require('../models/article');
const Book       = require('../models/book');
const Art        = require('../models/art');
const helpers    = require('../helpers/helpers');
mongoose.Promise = require('bluebird');


module.exports = (req, res) => {
  const auth     = req.params.id;
  const promise  = Article.find( { "author.authorId" : auth } ).exec();
  const promise2 = Art.find( { "author.authorId" : auth } ).exec();
  const promise3 = Book.find({ "author.authorId" : auth} ).exec();
  const fns      = [promise, promise2, promise3];

  Promise.all(fns)
    .then( ( articles ) => {   // return array articles = [] as value of promise
      // TODO merge  arrays in array articles
      return helpers.arrayMergeItems(articles);
    })
    .then( ( artCombined ) => {
      // console.log(artCombined);
      res.render('articlesByAuthor', { pageTitle: "all", items: artCombined  });
    })
    .catch( ( err ) => {
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
