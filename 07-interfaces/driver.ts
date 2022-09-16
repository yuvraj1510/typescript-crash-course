import { Coach } from "./coach";
import { CricketCoach } from "./cricketcoach";
import { GolfCoach } from "./golfcoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let coach of theCoaches) {
    console.log(coach.getDailyWorkOut());
}