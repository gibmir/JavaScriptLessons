"use strict"
// Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
function Calculator(firstArg, secondArg) {
  this.firstArg = firstArg;
  this.secondArg = secondArg;
  this.sum = function() {
    return +firstArg + +secondArg;
  }
  this.mul = function() {
    return +firstArg * +secondArg;
  }
  this.read = function() {
    this.firstArg = +prompt("Введите слагаемое");
    this.secondArg = +prompt("Введите слагаемое");
  }
};
