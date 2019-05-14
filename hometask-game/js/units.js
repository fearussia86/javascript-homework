

class Unit{

  //Функция конструктор, по которой будут создаваться объекты, в данном случае dogs
  constructor (name, image, x, y, width, height) {
      this._name = name;
      this._image = image;
      this._x = x;
      this._y = y;
      this._width = width;
      this._height = height;
  }


  Image(){
      let dogsImage = new Image();
      dogsImage.src='img/this._image';
      console.log(dogsImage.src);
      dogsImage.onload=function () {

            context.drawImage(dogsImage,x,y,width,height)
        };
  	}


  getDogName() {
    return this._name;
  }


getImage() {
  return this._image;
}

getX() {
  return this._x;
}


getY() {
  return this._y;
}

getWidth () {
  return this._width;
}

getHeight() {
  return this._height;
}


setX(x1){
		this._x = x1;
	}

	setY(y1){
		this._y = y1;
	}


  setWidth() {
    this._width = width;
  }

  setHeight() {
    this._height = height;
  }


setDogName() {
  this._name = name;
  }


setImage() {
  this._image = image;
}



}



class Dog extends Unit {

  //Мы говорим, что класс Dog наследуется от Unit и наследует
  //все методы своего родителя.

  constructor(nameDog, dogImg, xDog, yDog, widthDog, heightDog) {
         super(name, dogImg, x, y, width, height);
         this._name = "Ав";
         this._x = 25;
         this._y = 25;
         this._width = 100;
         this._height = 100;
         this._image = new Image();
}
}


let yy = Dog.objMove();
console.log(yy);
