(function(){
  "use strict";

  const log          = document.getElementById('js-user-login');
  const reg          = document.getElementById('js-user-register');
  const login        = document.getElementById('js-login');
  const signup       = document.getElementById('js-register');
  // const closeLogin   = document.getElementById('js-close-login');
  // const closeRegistration = document.getElementById('js-close-register-register');

  const showLoginHandler = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    console.log("x :" + x + " y :" + y);
  }

  const showRegistrationHandler = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    console.log("x : " + x + " y : " + y);
  }


  log.addEventListener('click', showLoginHandler, false)
  reg.addEventListener('click', showRegistrationHandler, false)

})();
