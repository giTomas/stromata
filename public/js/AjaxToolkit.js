const AjaxToolkit = (function(){
"use strict";

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

  const makeUrl = (part, el) => part + el.dataset.url;

  const getUser = (el) => el.dataset.user;

    return {
      xhr     : xhr,
      makeUrl : makeUrl,
      getUser : getUser
    };

})();
