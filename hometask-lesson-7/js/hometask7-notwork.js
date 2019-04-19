//Клик мыши состоит из нажатия и отжатия мыши, вместе - эти два действия - это клик.
//Это корректный вариант.





/*

1. Реализовать возможность добавления комментариев.
Комментарий вводится в textarea.
Комментарий добавляется по нажатию на кнопку Комментировать.
При добавлении комменария отображаются: аватар автора, имя автора, дата добавления комментария, текст комментария.
При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый),
имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата),
текст комментария (тот, что был введен в textarea).

Логика работы

1. Создаем блок комментариев div с классом comments в html файле.
2. Создаем переменную, которая получает форму комментариев со всеми ее элементами, полученную форму
с ее элементами кладем как раз в созданную переменную.
3. Создаем функцию проверки полей формы на заполнение и она же будет выводить комментарий на страницу HTML.
3.После того, как мы получили всю форму, мы каждый активный заполняемый элемент формы в функции
кладем в отдельную переменную. Далее через if и else проверяем заполняемость полей, если поля все заполнены,
то публикуем комментарий, если хотя бы один из элементов формы не заполнен, пишем, что надо заполнить форму.
4.При нажатии на кнопку отрпавить (функция срабатывания события) - публикуем комментарий на странице.



*/

let objForm = document.forms.comments;
let author = objForm.elements.auth;
let comment = objForm.elements.comm;
console.log(objForm);
let autor = objForm.elements.auth;
console.log(auth);


//console.log(auth.value);
//console.log(objForm.elements.auth.value);


let button = objForm.elements.but;
console.log(button);

objForm.addEventListener('submit', commForm);



function commForm(anyarray) {
anyarray.eventPreventDefault();
let objForm = document.forms.comments;

let author = objForm.elements.auth;
let comment = objForm.elements.comm;
console.log(comment);


if ((author.value < 3) || (comment.value < 5)) {
  console.log("Заполните элементы формы");
  //let text = "Заполните поля";

  let divText = document.createElement("div");

  divText.innerHTML = "Заполните поля";
  console.log(divText);
  let readyComments = document.getElementById("made-comments");
readyComments.appendChild(divText);

} else {

  let textareas = document.getElementsByTagName("texarea");
  let textarea = textareas[0];
  let commentItem = document.createElement("div");
  commentItem.setAttribute("class", "comment-item");
  console.log(commentItem);
  commentItem.innerText = textareas[0].value;
  let readyComments = document.getElementById("made-comments");
  readyComments.appendChild(commentItem);


}

}



commForm(objForm);

//let readyComments = document.getElementsByClassName("made-comments");
//console.log(readyComments);
