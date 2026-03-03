import { Matiere } from "./matiere";

export class NoteEleve {
    
    private _matiere: Matiere | undefined;
    private _valeur: Array<number> = new Array<number>();

    constructor(matiere: Matiere, valeur: Array<number>) {
        this._matiere = matiere;
        this._valeur = valeur;
    }

    get matiere(): Matiere | undefined {
        return this._matiere;
    }

    set matiere(matiere: Matiere) {
        this._matiere = matiere;
    }

    public get valeur(): Array<number> {
        return this._valeur;
    }
    public set valeur(value: Array<number>) {
        this._valeur = value;
    }
}