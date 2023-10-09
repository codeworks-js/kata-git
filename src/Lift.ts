import { Button } from "./Button";
import { Floor } from "./Floor";
import { User } from "./User";

export class Lift {
    private static readonly MAX_WEIGHT = 800
    constructor(
        private buttons: Button[], 
        private users: User[], 
        private floor: Floor
    ) {}
    
    moveTo(floor: Floor): void {
        const usersWeight = this.users.reduce((acc, user) => acc + user.weight, 0);
        if (usersWeight > Lift.MAX_WEIGHT) {
            this.beep();
            return;
        }
        this.floor = floor;
    }

    beep(): void {
        console.log('Beep');
    }
}