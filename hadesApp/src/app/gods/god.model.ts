import {Boon} from './boon.model';

export class God {
    public name: string;
    public description: string;
    public imagePath: string;
    public boon: Boon[] = [];
    

    constructor (name: string, description: string, imagePath: string, boons: Boon[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.boon = boons;
    }
}
