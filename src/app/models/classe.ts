import { Cours } from "./cours";
import { Eleve } from "./eleve";
import { EmploiDuTemps } from "./emploi-du-temps";
import { Professeur } from "./professeur";

export class Classe {
    
    private _id: number = 0;
    private _nom: string = "";
    private _eleveList: Array<Eleve> = new Array<Eleve>();
    private _professeurList: Array<Professeur> = [];
    private coursList: Array<Cours> = new Array<Cours>();
    private _emploiDuTemps: EmploiDuTemps | undefined;

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
    
    public get eleves(): Array<Eleve> {
        return this._eleveList;
    }

    public set eleves(eleves: Array<Eleve>) {
        this._eleveList = eleves;
    }   
    
    public get professeurs(): Array<Professeur> {
        return this._professeurList;
    }

    public set professeurs(professeurs: Array<Professeur>) {
        this._professeurList = professeurs;
    }     

    public get cours(): Array<Cours> {
        return this.coursList;
    }

    public set cours(courssList: Array<Cours>) {
        this.coursList = courssList;
    }     

    public get emploiDuTemps(): EmploiDuTemps | undefined{
        return this._emploiDuTemps;
    }

    public set emploiDuTemps(value: EmploiDuTemps) {
        this._emploiDuTemps = value;
    }    
}
