import { Jour } from "./jour";
import { Matiere } from "./matiere";

export class Cours {

    private _matiere: Matiere | undefined;
    private _duree: string = "";
    private _jour: Jour | undefined;

    constructor(matiere: Matiere, duree: string = "", jour: Jour) {
        this.matiere = matiere;
        this.duree = duree;
        this.jour = jour;
    } 
    
    public get matiere(): Matiere | undefined {
        return this._matiere;
    }

    public set matiere(value: Matiere | undefined) {
        this._matiere = value;
    }

    public get duree(): string {
        return this._duree;
    }

    public set duree(value: string) {
        this._duree = value;
    }

    public get jour(): Jour | undefined {
        return this._jour;
    }

    public set jour(value: Jour | undefined) {
        this._jour = value;
    }
}
