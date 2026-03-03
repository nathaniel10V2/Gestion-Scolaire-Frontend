import { Absence } from "./absence";
import { Classe } from "./classe";
import { EmploiDuTemps } from "./emploi-du-temps";
import { NoteEleve } from "./noteEleve";

export class Eleve {

    private _id: number = 0;
    private _nom: string = "";
    private _prenom: string = "";
    private _adresse: string  = "";
    private _classe: Classe | undefined;
    private _notes: Array<NoteEleve> = new Array<NoteEleve>();
    private _absences: Array<Absence> = new Array<Absence>();

    constructor(nom: string, prenom: string, adresse: string) {
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
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

    public get prenom(): string {
        return this._prenom;
    }

    public set prenom(prenom: string) {
        this._prenom = prenom;
    }    
    
    public get adresse(): string | undefined {
        return this._adresse;
    }

    public set adresse(adresse: string) {
        this._adresse = adresse;
    }

    public get classe(): Classe | undefined {
        return this._classe;
    }

    public set classe(classe: Classe) {
        this._classe = classe;
    }

    public get notes(): Array<NoteEleve> {
        return this._notes;
    }

    public set notes(note: Array<NoteEleve>) {
        this._notes = note;
    }

    public get absences(): Array<Absence> {
        return this._absences;
    }

    public set absences(value: Array<Absence>) {
        this._absences = value;
    }
}
