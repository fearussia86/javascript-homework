/*
ДЗ ПО АКТИВАЦИИ ПОЛЯ В ФОРМЕ
//ДОМАШНЕЕ ДЗ - разработать обработчик чекбоксов, а также  радиокнопок.
//Работаем только с <fieldset name="checkbox_fieldset">
//Всю информацию выводить в консоль.
//При простановке галочке - отметье, если указать другую информацию -
//сделать, чтобы поле активизировалось.
//За активацию поля отвечает атрибут disabled - у него два значения - true, false.
//Поэтому нам надо написать функцию, в которой значение disabled будет меняться с false на true.

*/

//Активация поля

let form = document.forms.lesson;
console.log(form);

let elem = form.elements.checkbox1;

console.log(elem);
//Если атрибут есть то удаляем его, если его нет, то добавляем его.
//
elem.addEventListener("click", activated);

function activated() {
  console.log(this.checked);

//Второй вариант.
//form.elements.disabledOnOff.disabled = !this.cheched;

   if (form.elements.disabledOnOff.hasAttribute('disabled')) {
     form.elements.disabledOnOff.removeAttribute('disabled');
     console.log(1);
   } else {
     form.elements.disabledOnOff.setAttribute("disabled", "1");
     console.log(2);
   }
}













/*
Задания по fieldset (папка lesson7, файл form-events.html).
   1. Выбор цвета: в зависимости от выбранной радиокнопки окрашивать fieldset в тот или иной цвет.
   2. Выбор языка программирования: выводить в консоль значения отмеченных чекбоксов.
   Пользователь отмечает какой-то чекбокс, его значение выводится в консоль,
   пользователь отмечает еще один в консоль выводятся значения обоих и тд. Аналогично при отмене выбора.

*/


//Доступ к форме по значению атрибута name=lesson;


//ПО свойству forms - получаются все формы, которые есть на конкретной странице.

//Теперь мы можем из формы получать отдельные ее элементы и использовать.

//Получение элементов формы по значению атрибута name

//У формы есть свойство элемент, с помощью которого указываем название тега, который хотим получить.
let login = form.elements.login;
console.log(login);

//Получение и установка значений, которые ввел пользователь в поле input формы
console.log(login.value); //Таким образом мы получаем значение, которое было введено.
login.value = "qwe"; //Таким образом мы устанавливаем значение в поле input
//ПРавильнее на JS получать данные формы, Обрабатывать на JS введенные данные, проверять и потом
//уже отправлять на сервер.


let colorRadio = form.elements.color;
console.log(colorRadio);

let checkedValue = colorRadio.value;
console.log(checkedValue);

for (let i = 0; i < colorRadio.length; i++) {
  if (colorRadio[i].checked) {
      form.elements.checkbox_fieldset.style.background = colorRadio[i].value;

  }
}

//При установленном значении кнопки checked мы без всяких переборов можем получить ее значение.
//Приходит массив из двух радиокнопок.
//Попадает объект на регистратор события, далее при происхождении события, далее запускается функция,
//которая меняет цвет поля <legend>Checkbox | Radio</legend> на выбранный.

let changeRadio = form.elements.color;

for (let i = 0; i < changeRadio.length; i++) {
  console.log(changeRadio[i]);
  changeRadio[i].addEventListener("click", radioButton);

  function radioButton() {
    if (colorRadio[i].checked) {
        form.elements.checkbox_fieldset.style.background = colorRadio[i].value;

    }
  }

}



//colorRadio.addEventListener("click", getCheckedCkeckBoxes);





function getCheckedCkeckBoxes(name) {
   let checkBoxes = document.getElementsByName(name);

   let checkBoxChecked = [];

   for (let i = 0; i < checkBoxes.length; i++){
      if(checkBoxes[i].checked) {
          checkBoxChecked.push(checkBoxes[i].value);
          console.log("Значение чекбокса: ", checkBoxes[i].value);
      }
   }

   return checkBoxChecked;
}


let langArr = getCheckedCkeckBoxes('lang[]');
console.log(langArr);



let checkbox = document.getElementsByName('lang[]');
console.log(checkbox);

let checkbox1 = form.elements['lang[]'];
console.log(checkbox1);


//ДОМАШНЕЕ ДЗ - разработать обработчик чекбоксов, а также  радиокнопок.
//Работаем только с <fieldset name="checkbox_fieldset">
//Всю информацию выводить в консоль.
//При простановке галочке - отметье, если указать другую информацию -
//сделать, чтобы поле активизировалось.
//За активацию поля отвечает атрибут disabled - у него два значения - true, false.
//Поэтому нам надо написать функцию, в которой значение disabled будет меняться с false на true.


let countries = form.elements.countries; //.countries - получение элемента формы по имени countries
console.log(countries);
console.log(countries.length);
//optgroup - никакую роль не играет в JS, используется только для стилистики, для группирования элементов.
for(let i = 0; i < countries.length; i++ ) {
console.log(countries[i]);

if (countries[i].selected) {
  console.log("selected countries", countries[i].value); //получаем значения выбранных элементов.
}

}


form.addEventListener('submit', takeForm); //Submit Вешается на форму, не на кнопку.
//В функции либо только проверка и потом отправка формы, либо проверка формы через Ajax


function takeForm(event) {
    event.preventDefault(); //Отмена события по умолчанию.
    //Она, функция, отменяет вот это событие -  form.addEventListener('submit', takeForm);
    //т.е. форма не отправится.
    console.log(this);

    let formData = new FormData(this); //Объект объекто-ориентированный.
    //this - это форма, в переменную formData
    console.log(formData.getAll("lang[]"));
    console.log(formData.get("login"));
}

//Будем добавлять к инпутам подсказки.
//Подсказки к   <input name="login" id="login" type="text"> и к <input id="pwd" type="password">

let info = {
  login: {
    error: "Введите верный логин",
    success: "Логин введен правильно"
  },

  pwd: {
    error: "Введите верный пароль",
    success: "Пароль введен правильно"
  },


};

let validateFields = {
  login: form.elements.login,
  pwd: form.elements.pwd
};

let rules = {
  login: 3,
  pwd: 6
};


let formValidator = {
  init: function(info, fields, rules) {
    this.info = info;
    this.fields = fields;
    this.rules = rules;
  },

addListener: function(){
  for (let key in this.fields) {
    this.fields[key].addEventListener('blur', this.showResult.bind(this));



  }
},

showResult: function () {

}

};


//blur - когда надо обработать элемент, когда фокус потерян
//focus - событие focus наступает, когда мы фокусируемся на элементе.

login.addEventListener('focus', focusOnElem);

function focusOnElem () {
  console.log("focus on", this);
}


login.addEventListener('blur', blurOnElem);

function blurOnElem () {
  console.log("focus out (фокусировка убрана с элемента)", this.value);

}
