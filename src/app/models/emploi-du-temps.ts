import { Classe } from "./classe";
import { Cours } from "./cours";

export class EmploiDuTemps {

    private _nom: string = "";
    private coursList: Array<Cours> = new Array<Cours>();
    private _classe: Classe | undefined;

    constructor(classe?: Classe) {
        this._classe = classe;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nom: string) {
        this._nom = nom;
    }

    public get classe(): Classe | undefined {
        return this._classe;
    }

    public set classe(value: Classe) {
        this._classe = value;
    }

    public get cours(): Array<Cours> {
        return this.coursList;
    }

    public set cours(courssList: Array<Cours>) {
        this.coursList = courssList;
    }    
}
