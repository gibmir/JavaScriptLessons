"use strict"
describe("возводит x в степень n", function() {

  function makeTest(x) {
    var expected = x * x * x;
    it("при возведении " + x + " в степень 3 результат: " + expected, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (var x = 1; x <= 5; x++) {
    makeTest(x);
  }

});

describe("Переводит первый символ в верхний регистр", function() {

  function toUpperCaseFirstTest() {
    it("Первый символ в слове World должен быть - W", function() {
      assert.equal(toUpperCaseFirst("World"), "W");
    });
    it("Первый символ в слове world должен быть - W", function() {
      assert.equal(toUpperCaseFirst("world"), "W");
    });
  };
  toUpperCaseFirstTest();
});

describe("Находит спам в заданной строке", function() {
  function checkSpamTest() {
    it("В строке \"Buy some viagra dude\" содержится спам \"viagra\"", function() {
      assert.equal(checkSpam("Buy some viagra dude"), true);
    });
    it("В строке \"Buy some vagra dude\" не содержится спам", function() {
      assert.equal(checkSpam("Buy some vagra dude"), false);
    });
    it("В строке \"Watch xxx dude\" содержится спам \"xxx\"", function() {
      assert.equal(checkSpam("Watch xxx dude"), true);
    });
    it("В строке \"Watch x dude\" не содержится спам", function() {
      assert.equal(checkSpam("Watch x dude"), false);
    });
  }
  checkSpamTest();
})
describe("Усекает строку string до заданной длины maxLength", function() {
  function truncateStringTest() {
    it("Строка \"Вот это да!\" должна быть усечена до трёх символов и равна \"Вот...\"", function() {
      assert.equal(truncateString("Вот это да!", 3), "Вот...");
    });
    it("Строка \"Вот\" усекаться не должна", function() {
      assert.equal(truncateString("Вот", 3), "Вот");
    });
  }
  truncateStringTest();
})
describe("Выделяет сумму из строки типа \"\$120\"", function() {
  function extractCurrencyValueTest() {
    it("из строки типа \"\$120\" должно вернуться число 120", function() {
      assert.equal(extractCurrencyValue("$120"), 120);
    })
  }
  extractCurrencyValueTest();
})
