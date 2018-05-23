describe("Функция doubleBraceSum() работает через двойные скобки: doubleBraceSum()()", function() {
  function doubleBraceSumTest() {
    it("При вызове типа doubleBraceSum(3)(1) функция должна вернуть 4", function() {
      assert.equal(4, doubleBraceSum(3)(1));
    })
  }
  doubleBraceSumTest();
})
describe("Функция buffer представляет собой буфер строк", function() {
  function bufferTest() {


    it("Функция makeBuffer() возвращает функцию buffer, а не undefined", function() {
      assert.notEqual(undefined, makeBuffer());
    });
    it("Функция buffer с аргументом \"Ого\" возвращает строку \"Ого\"", function() {
      assert.equal("Ого", makeBuffer()("Ого"));
    });
    it("Функция buffer работает с массивом аргументов", function() {
      assert.equal("Замыкания нужно использовать", makeBuffer()("Замыкания ", "нужно ", "использовать"));
    });
    it("очищает буфер вызовом clear", function() {
      var buffer = makeBuffer();
      buffer("test");
      buffer.clear();
      buffer("первый");
      buffer("второй");
      assert.equal(buffer(), "первыйвторой");
    });
  }
  bufferTest();
})
