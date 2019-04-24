/*
Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).
Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.
Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,
у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект goods из файла с урока.
*/

/*
Логика решения.
Для того, чтобы нам функция вернула объект с товарами, цены которых лежат в диапазоне от значения
from до значения to, нам нужно внутри этой функции создать перебор свойств (ключей) объекта (многомерного массива),
и внутри перебора создать еще один перебор уже по ключу внутреннего объекта и далее написать условия,
по которому внутренние объекты, удовлетворяющих заданному условию, вывелись в консоль лог.
Далее вызвать функцию и указать в ней значения from, to и объект.
*/

(function () {

'use strict'
// для домашнего задания номер 1 и 2
    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };


function getGoods(object, from, to) {
  let arr = {};
  for (let keys in object) {
    // let arr = console.log(object[keys]["price"]);

    if ((object[keys]["price"]) >= from && (object[keys]["price"]) <= to) {
      //Добавляем подходящие товары в результирующий объект
  arr[keys] = object[keys];
    }

//Важно! Если мы сделаем возврат массива фунукции return arr внутри условия if() {},
//то у нас будет обрабатываться только один цикл и сразу выводиться результат, программа
//не будет переобходить весь массив и выполнять необходимое количество циклов.
    //return object[keys];

    //Если мы не понимаем, что и как у нас отрабатывает, нужно выводить те переменные
    //В консоль лог и смотреть, как отрабатывают те или иные команды, что дает на выходе.
  }

console.log(arr);
return arr; //После обхода и просмотра всех условий с помощью конфигурации if(){}
//мы вернули массив return arr с найденными данными, удовлетворяющими заданным условиям.
//Возвращая функцию, мы можем ею пользоваться. Возврат нужно делать внутри функции,
//А вызов функции уже происходит за ее пределами.

}



getGoods(goods, 800, 3000);




//К заданию не относится.

let animals = {
  ru: ["кот", "собака", "тигр"],
  en: ["cat", "dog", "tiger"]
};

console.log(animals.ru[1]); //получается anivals.ru[i];


/*
2. Написать функцию addToCart(obj, title, countToCart) {} , где  obj - объект, title - название товара,
countToCart - количество товара, которое нужно добавить в корзину.
Функция ищет товар с указанным названием, если количество позволяет,
то уменьшает количество товара на countToCart, если не позволяет,
то выводит информацию об этом в консоль и завершает работу.  Для проверки функции используйте объект goods из файла с урока.
*/


function addToCart(obj, title, countToCart) {

let arr2;

for (let kluch in obj) {

  if ((obj[kluch]["title"] == title)  && (obj[kluch]["count"] > 0)) {
  let arr2 = console.log((obj[kluch]["count"] - countToCart));

} else if ((obj[kluch]["count"] > 0) && (obj[kluch]["count"] < countToCart)) {
console.log("Количество товара в наличии не позволяет уменьшить общее количество товара на заданное");
}

}
return arr2;
}


addToCart(goods, prompt("Введите значение товара, например - Пианино"),
prompt("Введите кол-тво товара, например, 10") );


// 3. Напишите функцию, которая отсортирует массив объектов books по значению свойства title.
//Т.е. отсортирует массив по свойству title
//Объект в файле с занятия.

/*
JavaScript метод sort() позволяет отсортировать массив путём преобразования его элементов в строки и сравнения
этих строк в порядке следования кодовых символов Unicode (сортирует массив по алфавиту).

Обращаю Ваше внимание, что метод sort() не создает новый объект Array,
а производит сортировку переданного массива. Элементы массива, которые не содержат элементов ("дыры")
будут отсортированы после элементов, которые содержат значение.
*/

console.log("=================================================================");
console.log("Задание №3");


let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];
console.log("Вывод исходного массива до сортировки");
console.log(books);


function booksort(arr) {
  arr.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }

  })
return arr;
}


console.log(booksort(books));

/*
Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
Выведите на экран текущий день недели.

*/




  function WeekDay(anyday) {
    date = date || new Date();
    let days = {
      1: "Понедельник",
      2: "Вторник",
      3: "Среда",
      4: "Четверг",
      5: "Пятница",
      6: "Суббота",
      7: "Воскресение"
    };
    let today = days.getDay();

    return today;
}

let date1 = new Date(2019, 4, 24);
console.log(date1);
//Вроде сделано

} ());
