"use strict";

const routes                 = require('express').Router();
const getArticleById         = require('./routes/getArticleById');
const getArtById             = require('./routes/getArtById');
const getBookById            = require('./routes/getBookById');
const getAll                 = require('./routes/getAll');
const getAllArticles         = require('./routes/getAllArticles');
const getAllArticlesByAuthor = require('./routes/getAllArticlesByAuthor');
// mongoose.connect('mongodb://localhost:/stromata');

routes.get('/', getAll);


routes.get('/articles/:id', getArticleById)

routes.get('/art/:id', getArtById)

routes.get('/books/:id', getBookById)

routes.get('/articles', getAllArticles);

routes.get('/authors/:id', (req, res) => {
  console.log('authors ' + req.params.id )
});

//all articles by particular author
/*
routes.get('/articles/by/:id', (req, res) => {
  console.log('articles by ' + req.params.id);
})*/

routes.get('/articles/by/:id', getAllArticlesByAuthor)

/*
routes.get('/articles', (req, res) => {
  const promise = Article.find('articles').exec();

  promise.then( (articles) => {
    res.render('index', { pageTitle: "Index", items: articles })
  })
  .catch( (err) => {
    console.log(err);
  })
});*/


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
/*
routes.get('/', (req, res) => {
    Article.find('articles', function(err, articles){
      if (err)
        res.send(err);
          var first2 = [];
          for (var i = 0; i < 3; i++ ) {
            first2.push(articles[i]);
          }
          // console.log(articles);


          res.render('index', { pageTitle: "Index", items: articles })

  });

});*/
/*
function getArticleById(req, res) {
  Art.findById(req.params.id, function(err, article) {
  if(err)
    res.send(err);
    res.render('article', { item: article })
})
}

routes.get('/articles/art:id', getArticleById);*/


/*
routes.get('/art/:id', (req, res) => {

  Art.findById(req.params.id, function(err, article) {

    if(err)
      res.send(err);
      res.render('article', { item: article })
  })
})*/
/*
routes.get('/books/:id', (req, res) => {

  Book.findById(req.params.id, function(err, article) {

    if(err)
      res.send(err);
      res.render('article', { item: article })
  })
})*/


module.exports = routes;
