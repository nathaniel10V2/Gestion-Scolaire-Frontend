import { Professeur } from "./professeur";

export class Matiere {

    private _id: number = 0;
    private _nom: string = "";
    private _professeurList: Professeur[] = [];

    constructor(nom: string) {
        this._nom = nom;
    }

    public get id(): number {
        return this._id;
    }
    
    public set id(value: number) {
        this._id = value;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nom: string) {
        this._nom = nom;
    }
    
    public get professeurs(): Array<Professeur> {
        return this._professeurList;
    }

    public set professeurs(professeurs: Array<Professeur>) {
        this._professeurList = professeurs;
    }      
}
