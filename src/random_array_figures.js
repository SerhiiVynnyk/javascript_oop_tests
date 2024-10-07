class Figure {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    };

    get area() {};
    get perimeter() {};
}

class Square extends Figure {
    constructor(sideSize, color) {
        super('Квадрат', color);
        this.sideSize = sideSize;
    };

    get area() {
        return this.sideSize * this.sideSize
    };

    get perimeter() {
        return this.sideSize * 4
    }

    toString(){
        return `Фігура: ${this.name}, площа: ${this.area.toFixed(2)}, периметр: ${this.perimeter} довжина сторони: ${this.sideSize}, колір: ${this.color}.`
    };
}

class Triangle extends Figure {
    constructor(sideA, sideB, cosinusC, color) {
        super('Трикутник', color);
        this.sideA = sideA;
        this.sideB = sideB;
        this.cosinusC = cosinusC;
    };

    get sideC() {
        const a = this.sideA;
        const b = this.sideB;
        const cosC = Math.cos(this.cosinusC);
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2*a*b * cosC);
    }
    
    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    };

    get area() {
        const semiperimeter = this.perimeter / 2;
        return Math.sqrt(semiperimeter*(semiperimeter - this.sideA)*(semiperimeter - this.sideB)*(semiperimeter - this.sideC));
    };

    isRightTriangle() {
        const a = this.sideA;
        const b = this.sideB;
        const c = this.sideC;
        const con1 = (a*a) === (b*b) + (c*c);
        const con2 = (b*b) === (a*a) + (c*c);
        const con3 = (c*c) === (a*a) + (b*b);

        return (con1 || con2 || con3) ? 'прямокутний трикутник' : 'не прямокутний'
    };

    toString(){
        return `Фігура: ${this.name}, довжина 3-ої сторони: ${this.sideC} площа: ${this.area.toFixed(2)}, периметр: ${this.perimeter.toFixed(2)}, колір: ${this.color},` + 
            ` вид трикутника: ${this.isRightTriangle()}`
    };
}

class Circle extends Figure {
    constructor(radius, color) {
        super('Коло', color);
        this.radius = radius;
    };

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    };

    get perimeter() {
        return 2 * Math.PI * this.radius
    };

    toString(){
        return `Фігура: ${this.name}, площа: ${this.area.toFixed(2)}, периметр: ${this.perimeter.toFixed(2)}, колір: ${this.color}.`
    };
}

class Trapezium extends Figure {
    constructor(parallelSideA, parallelSideB, sideC, sideD, height, color) {
        super('Трапеція', color);
        this.parallelSideA = parallelSideA;
        this.parallelSideB = parallelSideB;
        this.sideC = sideC;
        this.sideD = sideD;
        this.height = height;
        this.color = color;
    };

    get area() {
        return (this.parallelSideA + this.parallelSideB)/2 * this.height
    };

    get perimeter() {
        return this.parallelSideA + this.parallelSideB + this.sideC + this.sideD
    }

    toString(){
        return `Фігура: ${this.name}, площа: ${this.area.toFixed(2)}, периметр: ${this.perimeter.toFixed(2)}, колір: ${this.color}.`
    };
}

const randomNumber = max => Math.floor(Math.random() * max);

const colorsArray = ['червоний', 'синій', 'зелений', 'сірий', 'жовтий', 'оранжевий'];

const arrayOfFunctions = [
    () => new Square(randomNumber(20) + 1, colorsArray[randomNumber(5)]),
    () => new Triangle(randomNumber(30) + 1, randomNumber(20) + 1, randomNumber(160) + 1, colorsArray[randomNumber(5)]),
    () => new Circle(randomNumber(20) + 1, colorsArray[randomNumber(5)]),
    () => new Trapezium(randomNumber(40) + 1, randomNumber(30) + 1, randomNumber(15) + 1, randomNumber(15) + 1,
        randomNumber(15) + 1, colorsArray[randomNumber(5)])
];

const arrayLength = randomNumber(10) + 1;

const result = Array.from({length: arrayLength}, () => arrayOfFunctions[randomNumber(3)]().toString());
console.log(result);

export { Figure, Square, Triangle, Circle, Trapezium };