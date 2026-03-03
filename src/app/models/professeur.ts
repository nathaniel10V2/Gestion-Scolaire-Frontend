import { Classe } from "./classe";
import { Matiere } from "./matiere";

export class Professeur {

    private _id: number = 0;
    private _nom: string = "";
    private _matiere: Matiere | undefined;
    private _classeList: Array<Classe> = new Array<Classe>();

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
    
    public get matiere(): Matiere | undefined {
        return this._matiere;
    }

    public set matiere(matiere: Matiere) {
        this._matiere = matiere;
    }    

    public get classes(): Array<Classe> {
        return this._classeList;
    }

    public set classes(classes: Array<Classe>) {
        this._classeList = classes;
    } 
    
    public ajouterClasse(classe: Classe) {
        if (!this._classeList.includes(classe)) {
            this._classeList.push(classe);
        }
    }
}
