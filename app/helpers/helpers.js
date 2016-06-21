"use strict";

exports.arrayMergeItems = (arr) => {
  const arrCombined = [];
    for (let i = 0; i < arr.length; i++) {
      const arrPart = arr[i];
      for (let j = 0; j < arrPart.length; j++) {
        arrCombined.push(arrPart[j])
      }
    }
   return arrCombined;
}
