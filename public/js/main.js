const Comments = (function(){
"use strict";

//DEPENDENCIES : AjaxToolkit

// consts
  // const btn       = document.getElementById('js-btn');
  const form      = document.getElementById('js-comment');
  const add       = document.getElementById('js-add');
  const comments  = document.getElementById('js-comments');
  const showHide  = document.getElementById('js-show-hide');
  const info      = document.querySelectorAll('.js-info');
// const tmp = document.getElementById('js-tmp').innerHTML;

//event Handlers
  //-->1
  const addHandler = (event) => {

    const src      = event.currentTarget;
    const url      = AjaxToolkit.makeUrl( "comments/", src);
    const formData = new FormData(form);
    const username = AjaxToolkit.getUser(form);
    console.log(username);
    // formData.append('username', username)

  //send new comment to server(database) and update comments
    AjaxToolkit.xhr( url, 'POST', formData)
      .then( (response) => add.innerHTML = response)
      .catch((err)      => console.log(err));

  // clear form
    form.reset();

  // PREVENT FORM FROM DEFAULT BEHAVIOUR -> RELOADING THE PAGE
    event.preventDefault();
  };

  //-->2
  const showHideHandler = (event) => {

    const src = event.currentTarget;
    console.log('hi');
    const url = AjaxToolkit.makeUrl( "comments/", src);
    const hasClass = comments.classList.contains('is-hidden');

    comments.classList.toggle('is-hidden');

    for (let i = 0; i < info.length; i++) {
      info[i].classList.toggle('is-hidden');
    }

    if (hasClass) {
     AjaxToolkit.xhr( url, 'GET')
       .then((response) => add.innerHTML = response)
       .catch((err)     => console.log(err));
    }
  };

// attach event listeners
   const formListener = () => {
      if (form !== null) {
      console.log('it exists!');
      form.addEventListener('submit', addHandler, false);
      }
    };

  const showHideListener = showHide.addEventListener('click', showHideHandler, false);

  return {
    listeners: [formListener(), showHideListener]
  };

})();

Comments.listeners;
