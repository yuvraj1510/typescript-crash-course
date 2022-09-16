let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for(let i=0; i<sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

//Let's use the simplified for loop
console.log("Using Simplified for loop:")
for(let tempSport of sportsOne) {
    if(tempSport == "Cricket") {
        tempSport = tempSport + " << My Favorite!";
    }
    console.log(tempSport);
}