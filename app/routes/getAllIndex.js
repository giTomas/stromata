"use strict";

const mongoose   = require('mongoose');
const History    = require('../models/history');
const Literature = require('../models/literature');
const Philosophy = require('../models/philosophy');
mongoose.Promise = require('bluebird');

// TODO get first 3 images from img collection
module.exports = (req, res) => {
  const limit    = 3;
  const promise1 = History.find({}).limit(limit).exec();
  const promise2 = Philosophy.find({}).limit(limit).exec();
  const promise3 = Literature.find({}).limit(limit).exec();
  // TODO get first imgs from img collection
  const fns = [promise1, promise2, promise3];

  Promise.all(fns)
    .then( (articles) => {   // return array articles = [] as value
      // console.log(articles[2]);
      // console.log(articles[0]);
      res.render('index', { pageTitle: "Index", items1: articles[0], items2: articles[1], items3: articles[2] })
    })
    .catch( (err) => res.send(err));
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
