

(function () {

'use strict';


let articles = [
  {
      id: "#",
      title: "Title",
      description: "description",
      author: "author"
  },

    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];


function ourTable(array){
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  let caption = table.createCaption();
  caption.setAttribute("style", "color: red", "font-weight: bold"); //Почему не работают два атрибута одновременно?
  caption.setAttribute("style", "font-weight: bold"); //Почему не работают два атрибута одновременно?

  caption.innerText = "Caption";

  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

cell1.innerText="id";
cell2.innerText="title";
cell3.innerText="description";
cell4.innerText="author";

for (let i=1; i<array.length; i++) {
  let rowtable = table.insertRow(); //нужны ли вообще скобки? insertRow() - это такая конструкция кода?

  for (let key in array[i]) {
      let cell = rowtable.insertCell();
      cell.innerText = array[i][key];
  }

}




let divTable = document.getElementById("table");
divTable.appendChild(table);
}





ourTable(articles);







} () );
