describe("Объект калькулятора", function() {
  function CalculatorTest() {
    var calculator;
    before(function() {
      calculator = new Calculator(2, 3);
    });
    it("Конструктор возвращает объект калькулятора", function() {
      assert.equal(true, calculator instanceof Calculator);
      assert.notEqual(undefined, calculator);
      assert.notEqual(undefined, calculator.firstArg);
    });
    it("Вызов метода sum() объекта calculator вернёт 5", function() {
      assert.equal(5, calculator.sum());
    });
    it("Вызов метода mul() объекта calculator вернёт 6", function() {
      assert.equal(6, calculator.mul());
    });
    // it("Вызов метода read() объекта calculator переопределяет слагаемые", function() {
    //   calculator.read();
    //   alert((calculator.firstArg) +" "+ calculator.secondArg);
    // });
  };
  CalculatorTest();
});
describe("Объект холодильника", function() {
  function FreezerTest() {
    var freezer;
    before(function() {
      freezer = new Freezer("Avalon", 100);
    });
    it("Конструктор возвращает объект холодильника", function() {
      assert.equal(true, freezer instanceof Freezer);
    });
    it("Свойство _isOn изначально false", function() {
      assert.equal(false, freezer._isOn);
    });
    it("Метод work меняет свойство _isOn на true", function() {
      freezer.work();
      assert.equal(true, freezer._isOn);
    });
  };
  FreezerTest();
});
