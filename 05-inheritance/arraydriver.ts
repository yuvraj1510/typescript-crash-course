import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";


let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRactangle = new Rectangle(0, 0, 3, 7);

let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRactangle);

for(let shape of theShape) {
    console.log(shape.getInfo());
}