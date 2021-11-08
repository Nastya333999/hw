// это абстракция т.к. описывает в общем все автомобили
class AbstractCars {
    getSpeed(){
        return 'moves faster than a turtle'
    }

    getTime(){
        return 'moves at the speed of light'
    }
}

// ауди наследует свойства от абстрактного класса
class Audi extends AbstractCars {
    constructor(time,distance) {
        super()
        this._time = time;
        this._distance = distance;
    }
// это инкапсуляция так как показано состояние (тут это скорость) определенного автомобиля
    getSpeed () {
        return this._distance / this._time; 
    }
}; 

class Mustang extends AbstractCars {
    constructor(time,distance) {
        super() 
        this._time = time;
        this._distance = distance;
    }

    getSpeed () {
        return this._distance / this._time; 
    }
};

class Reno extends AbstractCars {
    constructor(time, distance) {
        super()
        this._time = time;
        this._distance = distance;
    }

    getSpeed () {
        return this._distance / this._time; 
    }
    
}

class Bus extends AbstractCars {
    constructor(time, distance){
        super()
        this._time = time; 
        this._distance = distance;
    }

    getSpeed () {
        return this._distance / this._time; 
    }
}

// полиморфизм - показан в том, что у каждой машины есть скорость и мы сможем сложить и узнать обущю скорость
class Speeds {
    constructor() {
        this._cars = [];
    }
    addCars(cars) {
        if (!cars){
            return cars;
        }
        this ._cars.push(cars);
    }

    speedss(){
        const result = this._cars.reduce((acc, i) => {

            return acc + i.getSpeed()
        }, 0)
            return result
    }
}


const myOldCar = new Audi(2, 180); 
console.log(myOldCar.getSpeed());

const myFirstCar = new Reno(2, 100);
console.log(myFirstCar.getSpeed());
// показывает как рено наследуюет от абстрактного класса getTime 
console.log(myFirstCar.getTime());

const myCar = new Mustang (2,200); 
console.log(myCar.getSpeed());

const bus = new Bus (4, 80); 
console.log(bus.getSpeed()); 

const calc = new Speeds(); 
calc.addCars(myOldCar);
calc.addCars(myFirstCar);
calc.addCars(myCar);
calc.addCars(bus);

console.log(calc.speedss())