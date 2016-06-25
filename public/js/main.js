(function(){
"use strict";

const btn       = document.getElementById('js-btn');
const form      = document.getElementById('js-comment')
const add       = document.getElementById('js-add');
const comments  = document.getElementById('js-comments');
const showHide  = document.getElementById('js-show-hide');
const info      = document.querySelectorAll('.js-info');
// const tmp = document.getElementById('js-tmp').innerHTML;

const xhr = (url, method, data) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    // req.setRequestHeader("Content-type", "application/json")
    // req.setRequestHeader("Content-type", "multipart/form-data")
    req.onload = () => {
      req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
    };
    req.onerror = () => reject(Error("Network Error"));
    req.send(data);       //????? (data || "")
  });
};

function makeUrl(part ,src){
   return part + src.dataset.url;
};

//event Handlers

const addHandler = (event) => {
  const src = event.currentTarget;
  const url = makeUrl( "comments/", src);
  const formData = new FormData(form);

//send new comment to server(database) and update comments
  xhr( url, 'POST', formData)
    .then( (response) => add.innerHTML = response)
    .catch((err) => console.log(err));

  // clear form
  form.reset();

};


const showHideHandler = (event) => {
  const src = event.currentTarget;
  const url = makeUrl( "comments/", src);


  comments.classList.toggle('is-hidden');
  for (let i = 0; i < info.length; i++) {
    info[i].classList.toggle('is-hidden');
 }

 xhr( url, 'GET')
   .then((response) => add.innerHTML = response)
   .catch((err) => console.log(err));
};


btn.addEventListener('click', addHandler, false);

/*
btn.addEventListener('click', (event) => {
  const src = event.currentTarget;
  const url = makeUrl( "comments/", src);
  const formData = new FormData(form);

//send new comment to server(database) and update comments
  xhr( url, 'POST', formData)
    .then( (response) => add.innerHTML = response)
    .catch((err) => console.log(err));

  // clear form
  form.reset();

});*/

showHide.addEventListener('click', showHideHandler, false);

 /*
showHide.addEventListener('click', (event) => {
  const src = event.currentTarget;
  const url = makeUrl( "comments/", src);

  comments.classList.toggle('is-hidden');
  for (let i = 0; i < info.length; i++) {
    info[i].classList.toggle('is-hidden');
 }

 xhr( url, 'GET')
   .then((response) => add.innerHTML = response)
   .catch((err) => console.log(err));

 });*/

 // update client side HTML
   //xhr( url, 'GET')
     //SERVER SIDE rendering = clear & nice
     // .then( (response) => add.innerHTML = response)

     // CLIENT SIDE = mess
     // .then( (response) => JSON.parse(response)) //1
     // .then( (article)  => Handlebars.templates.comments(article)) //compiled tmp

     // .then( (article)  =>  {                    // tmp in as <script>
       // var template = Handlebars.compile(tmp);
       // return template(article);
     // })

     // .then( (html)  => add.innerHTML = html)       //  add to site <script> & comp tmp

     // .then((article)   =>  {                       // add to site compiled tmp
       // add.innerHTML = Handlebars.templates.comments(article);
     // })
     //.catch((err) => console.log(err));




})()
