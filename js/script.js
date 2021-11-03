class AbstractCars {
    getSpeed() {
        return 'moves faster than a turtle';
    }

    getTime() {
        return 'moves at the speed of light';
    }

}

class Audi extends AbstractCars {
    constructor(time, distance) {
        super();
        this._time = time;
        this._distance = distance;
    }

    getSpeed() {
        return this._distance / this._time;
    }
};

class Mustang extends AbstractCars {
    constructor(time, distance) {
        super();
        this._time = time;
        this._distance = distance;
    }

    getSpeed() {
        return this._distance / this._time;
    }
};

class Reno extends AbstractCars {
    constructor(time, distance) {
        super();
        this._time = time;
        this._distance = distance;
    }

    getSpeed() {
        return this._distance / this._time;
    }

}


const myOldCar = new Audi(2, 180);
console.log(myOldCar.getSpeed());

const myFirstCar = new Reno(2, 100);
console.log(myFirstCar.getSpeed());
console.log(myFirstCar.getTime());

const myCar = new Mustang(2, 200);
console.log(myCar.getSpeed());
