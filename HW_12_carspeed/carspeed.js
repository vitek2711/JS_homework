'use strict'

/// ЗАДАНИЕ 1 ///
/*const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
       return (`Если автомобиль ${this.make} ускоряется на 10 км/ч, то его скорость равна ${this.speed + 10} км/ч`)
    }

Car.prototype.brake = function () {
       return (`Если автомобиль ${this.make} снижает скорость на 5 км/ч, то его скорость равна ${this.speed - 5} км/ч`)
}

let bmvCar= new Car('BMW', 120);
let mercedesCar= new Car('Mercedes', 95);

//автомобили ускоряются
console.log(bmvCar.accelerate());
console.log(mercedesCar.accelerate());
console.log(`------------------------`)
//автомобили тормозят
console.log(bmvCar.brake());
console.log(mercedesCar.brake());*/

/// ЗАДАНИЕ 2 ///


class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate = function() {
        return (`Если автомобиль ${this.make} ускоряется на 10 км/ч, то его скорость равна ${this.speed + 10} км/ч`)
    }

    brake = function () {
        return (`Если автомобиль ${this.make} снижает скорость на 5 км/ч, то его скорость равна ${this.speed - 5} км/ч`)
    }

    get speedUS(){
        return (`Автомобиль ${this.make} двигается со скоростью ${this.speed / 1.6} ми/час`);
    }

    set speedUS(mill){
        this.speed = mill * 1.6;
    }
}

const fordCar = new CarCl('Ford', 120);


fordCar.speedUS = 120;

console.log(fordCar.accelerate());
console.log(fordCar.brake());
console.log(`------------------------------`)
console.log(fordCar.speedUS);







