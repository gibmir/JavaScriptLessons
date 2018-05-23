"use strict"
describe("Метод получает массив строк и возвращает их длины", function() {
  function getWithMapTest() {
    it("В массиве одно слово длинной в 4 символа", function() {
      var arr = ["река"];
      assert.equal(getWithMap(arr), 4);
    });
  };
  getWithMapTest();
});
describe("Метод проверяет является ли его первый аргумент undefined", function() {
  function firstArgumentIsUndefinedTest() {
    it("Если мы не передаём аргументы в метод, то он должен вернуть true", function() {
      assert.equal(true, firstArgumentIsUndefined());
    });
    it("Если передаём хотя бы один аргумент в метод, то он должен вернуть false", function() {
      assert.equal(false, firstArgumentIsUndefined(1));
    })
  }
  firstArgumentIsUndefinedTest();
});
describe("Метод возвращает сумму всех своих аргументов", function() {
  function sumArgsTest() {
    it("Если в функцию переданы аргументы 1 и 4, то результат 5", function() {
      assert.equal(5, sumArgs(1, 4));
    });
    it("Если в функцию переданы две строки \"Ты \" \"помидор\",то результатом будет строка\"Ты помидор\"", function() {
      assert.equal("Ты помидор", sumArgs("Ты ", "помидор"));
    })
  }
  sumArgsTest();
})
