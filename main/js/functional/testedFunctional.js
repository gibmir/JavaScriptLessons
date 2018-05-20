"use strict";

function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

function toUpperCaseFirst(string) {
  return string.charAt(0).toUpperCase();
}

function checkSpam(string) {
  var viagraSpam = "viagra";
  var xxxSpam = "xxx";
  if ((~string.indexOf(viagraSpam)) || (~string.indexOf(xxxSpam))) {
    return true;
  } else {
    return false;
  }
}

function truncateString(string, maxLength) {
  var threeDots = "...";
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + threeDots;
  } else {
    return string;
  }
}
function extractCurrencyValue(string){
  var indexOfCurrencySymbol = 0;
  return +string.slice(indexOfCurrencySymbol+1);
}
