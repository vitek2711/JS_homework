'user strict'

/// ЗАДАНИЕ 1 ///

/*let Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`Автомобиль ${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.charge} %.`);
}

EV.prototype.brake = function () {
    this.speed -= 20;
    this.charge += 1;
    console.log(`Автомобиль ${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.charge} %.`);
}

let tesla = new EV('Tesla', 140, 23);

tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
console.log(tesla);*/

/// ЗАДАНИЕ 2 ///

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
    }
    accelerate () {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`Автомобиль ${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.#charge} %.`);
    }

    brake () {
        this.speed -= 20;
        this.#charge += 1;
        console.log(`Автомобиль ${this.make} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.#charge} %.`);
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.chargeBattery(85);
rivian.accelerate();
rivian.brake();

