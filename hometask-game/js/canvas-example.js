
//Здесь мы получаем элемент canvas из документа HTML
let canvasCollection
  = document.getElementsByTagName('canvas');

//Выводим canvas  в консоль.
  console.log(canvasCollection);


//Получаем сам элемент из объекта (в данном случае коллекции), указывая индекс 0 (первый элемент)
  let canvas = canvasCollection[0];
  //Задаем длину и высоту
  canvas.width = 900;
  canvas.height = 600;

//Укажываем, что это будет 2D
  let context = canvas.getContext('2d');

  //Заливает область зеленым цветом
  context.fillStyle = 'green';

//Задает положение контекста, указывая координаты и параметры: x, y, длина, ширина
  context.fillRect(0, 0, 900, 600);


//Создаем новый объект, изображение.
let catImg = new Image();
catImg.src = 'img/cat.png' //устанавливаем атрибут избражению аналог setAttribute("src", "img/cat.png");

//onload - аналог eventListener
catImg.onload = function () {
  context.drawImage(catImg, 22, 55, 100, 100) //указываем x-координату, y-координату, длину, высоту.

};


//Задаем значения исходные квадрату на оси координат,
//который будет окрашен в зеленый цвет и будет затирать остатки изображения-объекта catImg
let x = 22;
let y = 55;



//Вешаем событие на весь документ, принажатии любой кнопки клавиатуры ('keypress') срабатывает функция movePic
document.addEventListener("keypress", movePic);

function movePic(event) {

  //Устанавливаем, в какой цвет будет закрашиваться область, равная размеру выведенного изображения на экран, после него
  context.fillStyle = 'green';
  //Переносим координаты закрашиваемой области, задаем ей длину и ширину по 100, в итоге получаем зеленый квадрат.
  context.fillRect(x, y, 100, 100);
  //event.target -проверяем код кнопки.
  //реализуем через конструкцию if - если нажата такая то кнопка, то двигаем картинку на n шагов в одну сторону.
  //Если нажата кнопка вверх, то меняем координаты по y, на определенное количество шагов (сколько нажали)
  //Определяем код кнопок и взависимости

if(event.code === "KeyD") {
x+=4;
} else if (event.code === "KeyA") {
  x-=4;
} else if(event.code === "KeyW") {
  y-=4;
} else if(event.code === "KeyS") {
  y+=4;
}

  console.log(event);

  //clearImage();

  //x += 5;

  //Отрисовываем наш объект catImg, указывая его координаты x, y  и длину и ширину.
  context.drawImage(catImg, x, y, 100, 100);
}



//Создали объект - собаку, за которой гоняется кот.

/*
let dogImg = new Image;
dogImg.src = 'img/dog.png';
dogImg.onload = function() {
  context.drawImage(dogImg, 70, 150, 100, 100);
};
*/





//Запускаем движение объекта

//document.addEventListener("keypress", objMove);



//Задали координаты старта.






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function objMove(event2) {
  let x1 = 70;
  let y1 = 150;
  let randomX = getRandomInt(50, 800);
  let randomY = getRandomInt(50, 500);


  let dog = new Unit('dog1', 'image', randomX, randomY, 150, 150);


setInterval( function () {
  let dogImg = new Image;
  dogImg.src = 'img/dog.png';
    dogImg.onload = function() {
context.drawImage(dogImg,  randomX, randomY, dog._width, dog._width)};

}, 100);










}

objMove();




//Unit.objMove();
//objMove();

//Вопросы к Дарье.
//1. Как сделать так, чтобы объект двигался.
//2. Как через innerHTML создать возможность затирать объект и потом чтобы он появлялся с другими координатами.
//Под затирание и появление - надо отдельную функцию писать?

//На кнопки мы вешаем обработчики события, по нажатию на определенную кнопку,
//будут срабатывать обработчики события - вначале затираем изображение (через innerHTML) и
//далее вновь создаем изображение меняя координаты, таким образом будет имитироваться движение
//У каждой кнопки клавиатуры есть код, получая код и понимая, какая кнопка нажата, в те стороны и
//двигаем картинку.

//Делаем на ООП с помощью классов.
//Игрок ходит по полю и собирает картинки.
//Если объекты сталкиваются (игрок собрал картинку), то она исчезает, игороку дается балл,
//а объект потом появляется в другом месте.
//Нужно получить объект кнопок,


/*
1.Нужно сделать общий объект, куда мы будем складывать все другие однотипные объекты.

2. Далее пишем класс игрока, которому задаются стартовые координаты, размеры,
через метод (можно сделать через геттеры и сеттеры, либо через функцию конструктор)
Например класс Unit

4. Далее для каждой картинки пишем класс и задаем метод функции, определяющий начальные координаты и размеры.

5. Проще для всех на начальных координатах создать универсальный класс Unit, чтобы не дублировать код.

6. Будет класс и метод отрисовать картинку (туда передаются координаты картинки), будет под это отдельный класс.

7. Будет класс с методом затирания (исчезания) картинки, туда также будут передаваться и получаться координаты.

8.Также у нас будет класс, который будет определять свойство поля canvas и контекста

9. Класс счета, табло.



*/
