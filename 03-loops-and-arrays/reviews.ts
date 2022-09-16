let reviewes: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for(let i=0; i<reviewes.length; i++) {
    console.log(reviewes[i]);
    total += reviewes[i];
}

let average: number = total / reviewes.length;

console.log("Reviews Average : "+average);