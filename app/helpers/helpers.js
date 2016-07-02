"use strict";

// functional way with reduce
exports.arrayMergeItems = (arr) => arr.reduce( (a, b) => a.concat(b) );

/*
// with forEach
exports.arrayMergeItems = ( arr ) => {
  const arrCombined = [];
  arr.forEach( (item) => {
    item.forEach( (obj) => arrCombined.push(obj));
  });
  return arrCombined;
};*/

// with for loop
/*
exports.arrayMergeItems = (arr) => {
  const arrCombined = [];
  const len         = arr.length;
  for (let i = 0; i < len; i++) {
    const arrPart = arr[i];
    for (let j = 0; j < arrPart.length; j++) {
    arrCombined.push(arrPart[j]);
    }
  }
  return arrCombined;
};*/

// change iso date to local string in comments - not very pure
exports.commentsDatetoLocaleString = (arr) => {
  // const arr1 = arr.comments;
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  return arr.map( (obj) => {
    const newObj = {};
    newObj.name = obj.name;
    newObj.body = obj.body;
    newObj.date = obj.date.toLocaleString('sk-u-nu-latn-ca-gregory');
    return newObj;
  });
}

exports.commentsDatetoLocaleString2 = (arr) => {
  // const arr1 = arr.comments;
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  return arr.comments.map( (obj) => {
    return { name: obj.name,
             body: obj.body,
             date: obj.date.toLocaleString('sk-u-nu-latn-ca-gregory')};
  });
}
