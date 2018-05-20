'use strict';
var myCoolFunc;
var i;
for (i = 0; i < 2; i++) {
  if (i === 0) {
    myCoolFunc = function(y, x) {

      return x * 15;
    };
  } else {
    myCoolFunc = function(x, y) {
      return x * y;
    };
  }

  alert(Math.floor(myCoolFunc(i, i)));
}
