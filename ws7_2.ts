class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    side: number;

    constructor(color: string, side: number) {
        super(color);
        this.side = side;
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

const redCircle = new Circle("Red", 5);
console.log(`Circle Color: ${redCircle.color}, Area: ${redCircle.calculateArea()}`);

const blueSquare = new Square("Blue", 4);
console.log(`Square Color: ${blueSquare.color}, Area: ${blueSquare.calculateArea()}`);