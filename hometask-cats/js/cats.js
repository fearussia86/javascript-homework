
// Создать класс Cat.
// У кота должно быть имя - name,
// возраст - age,
// вес - weight,
// сила - strength.
//
// Реализовать метод  fight(anotherCat)


class Cat{
  constructor(name, age, weight, strength){
    this._catName = name;
    this._catAge = age;
    this._catWeight = weight;
    this._catPower = strength;
  }


fight(enemyCat){

//Действие, механизм драки котов.
  console.log(this._catName, "напал на кота по имени",
            enemyCat.name);
  if((this._catAge > enemyCat._catAge) || (this._catWeight > enemyCat._catWeight)){
    console.log(this._catName, " сильнее, чем ", enemyCat.name);
  }
  console.log(this._catName, " слабее, чем ", enemyCat.name, " и получил люлей ");
}

get name(){
  return this._catName;
}

get age(){
  return this._catAge;
}

get weight(){
  return this._catWeight;
}

get strength(){
  return this._catPower;
}
}
