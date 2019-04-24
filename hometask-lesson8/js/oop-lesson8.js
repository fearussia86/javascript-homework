/*
ДЗ к уроку №8 (Занятие 9)
1.Реализовать метод библиотеки getBook(title). Метод возвращает книгу с названием равным title

Решение.

1.1 Создаем функцию конструктор, в котором указываем методы - setter и getter.
В сеттере устанавливаем значения, которые потом приходят в геттер.
1.2. Далее создаем переменную, в которую кладем объект new Book(title)
1.3. Вызываем и передаем значение сеттера
*/



function Book() {
  let titleBook = "title";

  //Делаем сеттер
  this.setTitleBook = function (nazvanieKnigi){
    if(nazvanieKnigi.length < 2) {
      return;
    }
    titleBook = nazvanieKnigi;
    console.log(titleBook);
  };

  //Делаем геттер (метод объекта - это свойство, значение которого выполняемая функция)
  this.getTitleBook = function() {
      return titleBook;
  };



}


let ourBook1 = new Book();
ourBook1.setTitleBook("Кай и Герда");

let ourBook2 = new Book();
ourBook2.setTitleBook("Sinderella");

let ourBook3 = new Book();
ourBook3.setTitleBook("Три порося");

console.log("========Конец первого задания к lesson 8, занятие 9. ===================");


console.log("=======Начало второго задания к lesson 8, занятие 9. ===================");


/*
Задание №2 к lesson8, занятие 9.
2. Создать фигуры: Circle, Rectangle, Triangle, у которых будут координаты.
Фигуры можно вывести в HTML файл и туда же передать расчеты площадей. 
Все фигуры должны иметь методы, которые возвращают площадь и периметр (для окружности - длина окружности).

2.1. Пишем функцию конструктор.
2.2. Устанавливаем геттеры и сеттеры
2.3. Будет три сеттера, первый сеттер this.setCircle, второй сеттер this.rectangle,
третий сеттер  this.triangle.
2.3. В сеттерах будет функция, в которую будут приходить координаты точек фигур, далее
в сеттерах пишем формулу расчета длин отрезков, зная координаты точек. Далее
пишем формулу расчетов площади, формулу расчетов периметра (или длины окружности для круга)
2.4. Получается, что в сеттеры, которые под объектами new приходят координаты точек.
*/


let circle = new figure();
circle.setCirlce(square, perimetr);

let rectangle = new figure();
circle.rectangle(square, perimetr);

let triangle = new figure();
circle.triangle(square, perimetr);
