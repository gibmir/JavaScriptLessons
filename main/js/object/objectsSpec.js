describe("Объект калькулятора", function() {
  function CalculatorTest() {
    var calculator;
    before(function() {
      calculator = new Calculator(2, 3);
    });
    it("Конструктор возвращает объект калькулятора", function() {
      assert.notEqual(undefined, calculator);
      assert.notEqual(undefined, calculator.firstArg);
    });
    it("Вызов метода sum() объекта calculator вернёт 5", function() {
      assert.equal(5, calculator.sum());
    });
    it("Вызов метода mul() объекта calculator вернёт 6", function() {
      assert.equal(6, calculator.mul());
    });
    it("Вызов метода read() объекта calculator переопределяет слагаемые", function() {
      calculator.read();
      alert((calculator.firstArg) +" "+ calculator.secondArg);
    });
  }
  CalculatorTest();
})
