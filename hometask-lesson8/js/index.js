


//Создаем объекты класса cat
let murzik = new Cat ("Мурзик", 2, 5, 15); //name, age, weight, strength
let tom = new Cat ("Tom", 4, 6, 18); //name, age, weight, strength
let cat = new Cat ("Бездомный", 4, 6, 18);
//Это два разных независимых объекта, которых объединяет только одно - они относятся к одному классу.


let cats = [murzik, tom, cat]; //Можно передать в функцию fight массив котов,
//через функцию перебора реализовать драку и расчет выигрыша кто победит. 


murzik.fight(tom); //Мурзик напал на Тома

tom.fight(murzik); //Том напал на мурзика

cat.fight(tom);
cat.fight(murzik);
