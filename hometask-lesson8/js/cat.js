/*
Создать класс Cat. У кота должно быть имя - name,
возраст - age, вес - weight, сила - strength
Реализовать нужно метод fight (anotherCat);
В зависимости от параметров будет выигрывать тот или иной кот

*/

class Cat {
  constructor(name, age, weight, strength) {
this._name = name;
this._age = age;
this._weight = weight;
this._strength = strength;

  }


  fight (enemyCat) {
    //Механизм драки котов
    //В зависимости от их веса, возраста и силы.
    console.log(this._name, "напал на кота по имени ", enemyCat.name);

    //Далее в функции fight или в другой функции в классе сделать условия и расчет
    //кто из котов в итоге победит.

  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }


  get weight() {
    return this._weight;
  }

  get strength() {
    return this._strength;
  }



}


//new Cat(//сюда передадим конкретные данные);
//new Cat(//сюда передадим конкретные данные);
