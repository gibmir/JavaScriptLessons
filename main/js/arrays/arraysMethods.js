// В объекте есть свойство className, которое содержит список «классов» – слов,
// разделенных пробелом:
var obj = {
  classNames: "open menu open"
}
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
// но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.
function addClass(object, cls) {
  if ("classNames" in object) {
    if (!contains(object["classNames"], cls)) {
      addWithoutSpace(object, cls);
    }
  }
}
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение.
// Функция должна корректно обрабатывать дублирование класса в строке:
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.
function removeClass(object, cls) {
  if ("classNames" in object) {
    if (contains(object["classNames"], cls)) {
      remove(object, cls);
    }
  }
}

function contains(string, cls) {
  return ~string.indexOf(cls);
}

function addWithoutSpace(object, cls) {
  var classes = object["classNames"].split(" ");
  classes.push(cls);
  object["classNames"] = classes.join(" ");
}

function remove(object, cls) {
  var classes = object["classNames"].split(" ");
  var filtered = classes.filter(function(string) {
    return string !== cls;
  });
  object["classNames"] = filtered.join(" ");
}
addClass(obj, "close");
addClass(obj, "open");
alert(obj.classNames);
removeClass(obj, "open");
alert(obj.classNames);

var arr = ["Есть", "жизнь", "на", "Марсе"];
// Код ниже получает из массива строк новый массив, содержащий их длины:
function getArrayOfLengths() {
  var arr = ["Есть", "жизнь", "на", "Марсе"];
  var arrLength = [];
  for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
  }
  alert(arrLength); // 4,5,2,5
};
getArrayOfLengths();
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
function getWithMap(array) {
  return array.map(function(element) {
    return element.length;
  });
}
alert(getWithMap(arr));
