import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";


let myCircle = new Circle(5, 10, 20);
let myRactangle = new Rectangle(0, 0, 3, 7);

let theShape: Shape[] = [];

theShape.push(myCircle);
theShape.push(myRactangle);

for(let shape of theShape) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}