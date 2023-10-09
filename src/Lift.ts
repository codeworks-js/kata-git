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

}