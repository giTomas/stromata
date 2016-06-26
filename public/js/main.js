(function(){
"use strict";

const btn       = document.getElementById('js-btn');
const form      = document.getElementById('js-comment')
const add       = document.getElementById('js-add');
const comments  = document.getElementById('js-comments');
const showHide  = document.getElementById('js-show-hide');
const info      = document.querySelectorAll('.js-info');
// const tmp = document.getElementById('js-tmp').innerHTML;

//event Handlers
  const addHandler = (event) => {
    const src = event.currentTarget;
    const url = AjaxToolkit.makeUrl( "comments/", src);
    const formData = new FormData(form);

  //send new comment to server(database) and update comments
    AjaxToolkit.xhr( url, 'POST', formData)
      .then( (response) => add.innerHTML = response)
      .catch((err) => console.log(err));

  // clear form
    form.reset();
  };


  const showHideHandler = (event) => {
    const src = event.currentTarget;
    const url = AjaxToolkit.makeUrl( "comments/", src);

    comments.classList.toggle('is-hidden');
    for (let i = 0; i < info.length; i++) {
      info[i].classList.toggle('is-hidden');
   }

   AjaxToolkit.xhr( url, 'GET')
     .then((response) => add.innerHTML = response)
     .catch((err) => console.log(err));
  };

//event listeners

  btn: btn.addEventListener('click', addHandler, false),

  showHide.addEventListener('click', showHideHandler, false)


})();
