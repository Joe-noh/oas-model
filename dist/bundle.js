'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Hello = function Hello() {
  classCallCheck(this, Hello);

  console.log("hello");
};

module.exports = Hello;
