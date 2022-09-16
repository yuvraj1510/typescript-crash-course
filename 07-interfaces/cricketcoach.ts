import { Coach } from "./coach";

export class CricketCoach implements Coach {

    getDailyWorkOut(): string {
        return "Practice spin bowling";
    }
    
}