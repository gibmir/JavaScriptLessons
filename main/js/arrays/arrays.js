var goods = ["kappa", "keppo", "ogo"];

function getLastGood(array) {
  var lastElementIndex = array.length - 1;
  return array[lastElementIndex];
}

goods.push("pogChamp");
alert(getLastGood(goods));
// Задача из 5 шагов-строк:
//
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего
// значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».
function fiveStringTask() {
  var styles = ["Jazz", "Blues"];
  styles.push("Rock\'N\'Rolla");
  changePenultimate(styles, "Classic");
  alert(styles.shift());
  styles.unshift(["Rap", "Reggi"]);
  alert(styles);
}

function changePenultimate(array, element) {
  var penultimateIndex = array.length - 2;
  array[penultimateIndex] = element;
}
fiveStringTask();
