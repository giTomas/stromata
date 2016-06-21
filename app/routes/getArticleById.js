"use strict";

const mongoose   = require('mongoose');
const Article    = require('../models/article');
mongoose.Promise = require('bluebird');



module.exports = (req, res) => {
const promise = Article.findById(req.params.id).exec();

  promise.then( (article) => {
    res.render('article', { item: article })
    })
    .catch( (err) =>{
      console.log(err);
    })
}

// mongoose.connect('mongodb://localhost:/stromata');
/*
module.exports = (req, res) => {

  Article.findById(req.params.id, function(err, article) {

    if(err)
      res.send(err);
      console.log('HO-HO');
      res.render('article', { item: article })
  })
};*/

// module.exports = getArticleById;
