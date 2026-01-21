import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountdownService {
    private targetDate: Date = new Date('2026-01-21T00:00:00'); 
    private currentDate: Date = new Date();
    
    public getTimeRemaining() {
        const total = this.targetDate.getTime() - this.currentDate.getTime();
        const remainingDays = Math.floor(total / (1000 * 60 * 60 * 24));

        if(this.isCountdownExpired() === false) {
            return remainingDays;
        } 

        return 0;
        
    }
    
    public isCountdownExpired(): boolean {
        return this.currentDate >= this.targetDate;
    }
}