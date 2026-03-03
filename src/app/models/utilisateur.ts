export class Utilisateur {
    
    private _id: number;
    private _nom?: string = "";
    private _email: string = "";
    private _motDePasse: string = "";

    constructor(email: string, motDePasse: string, nom?: string) {
        this._id = 0;
        this._nom = nom;
        this._email = email;
        this._motDePasse = motDePasse;
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }    

    public get nom(): string | undefined {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }   

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }   
    
    public get motDePasse(): string {
        return this._motDePasse;
    }
    public set motDePasse(value: string) {
        this._motDePasse = value;
    }    
}
