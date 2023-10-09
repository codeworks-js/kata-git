import { Button } from "./Button";
import { Floor } from "./Floor";
import { Lift } from "./Lift";

export class Building {
    constructor(
        private floors: Floor[],
        private lifts: Lift[],
    ) {}
}