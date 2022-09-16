import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";


let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRactangle = new Rectangle(0, 0, 3, 7);
console.log(myRactangle.getInfo());