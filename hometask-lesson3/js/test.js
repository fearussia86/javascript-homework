

let u = 1234;
console.log(typeof u);

let string;
string = ["Два раза", '3', 'x2' ];
console.log(typeof string);

let ssl = "33 мушкетера";
console.log(parseInt(ssl));

let arr1 = [33, 25, "25 мушкетеров", "18 жучков x"];
console.log(parseInt(arr1[0]));
console.log(parseInt(arr1[1]));
console.log(parseInt(arr1[2]));
console.log(parseInt(arr1[3]));

let time = "12.45min";
console.log(parseFloat(time));


let number = 2;

console.log(number++);


//Тернарный оператор
let arr3 = ['1', '3', '5'];

result = (Array.isArray(arr3)) ? "Данный элемент является массивом" : "Данный элемент не является массивом";
console.log(result);


//ПОДРОБНОЕ ИЗУЧЕНИЕ РАБОТЫ МАССИВОВ.

let arr4 = ["Машина", "Автобус", 34, "Число X"];

console.log(typeof arr4[0] + " "+ arr4[0]);
console.log(typeof arr4[1] + " тип " + arr4[1]);
console.log(typeof arr4[2]   + " тип2 " + arr4[2]);
console.log(arr4[3]);


let arr5 = ["Таня", "Катя", "Саша", "Петр"];
for(i = 0; i <= arr5.length; i++) {
  console.log(arr5[i]);
}

/*let arr6 = arr5.pop(); // pop - удаляет последний элемент из массива и возвращает этот элемент,
//Для этого нужно положить его в отдельную переменную и можно вывести в консоль.
console.log(arr6);

console.log(arr5);*/


arr5.push("Алина"); /*push - добавляет новый элемент в конец исходного массива.
                      Далее в консоле нужно выводить опять тот же массив arr5 и мы увидим, что
                      наш массив стал больше на заданное количество элементов.  */
arr5.push("Валерия");
console.log(arr5);


let deleteElem = arr5.shift(); //Метод Shift удаляет и возвращает первый элемент массива.
console.log(arr5);

console.log(deleteElem);

//Метод unshift добавляет элемент в начале массива.
let arr9 = ["Элемент1", "Элемент2", "Элемент3", "Элемент4"];
arr9.unshift("Элемент_в_начале_массива");
console.log(arr9);

let arr10 = [1, 4, 7, 10];
arr10.unshift(0);
console.log(arr10);


//Метод includes проверяет, есть ли в массиве заданный элемент, т.е. включает ли массив в себя искомый элемент.
//Если такой элемент есть - ответ true, если нет такого элемента ответ - false.
let arr11 = ["Мама", "Папа", "Доча", "Сын"];
let search = arr11.includes("Сын");
console.log(search);

let search2 = arr1.includes("Брат");
console.log(search2);
