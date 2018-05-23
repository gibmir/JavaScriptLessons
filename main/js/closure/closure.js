"use strict"

function doubleBraceSum(firstTerm) {
  return function(secondTerm) {
    return firstTerm + secondTerm;
  }
}
function makeBuffer(){
  var resultString = "";
  function buffer(){
    if(arguments.length === 0){
      return resultString;
    }else{
      for (var i = 0; i < arguments.length; i++) {
       resultString += arguments[i];
      }
    }
    return resultString;
  }
  buffer.clear = function(){
    resultString = "";
  }
  return buffer;
}
