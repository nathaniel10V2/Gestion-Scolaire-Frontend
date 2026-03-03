export class Absence {

    private _duree: string = "";
    private _estJustifie: boolean = false;
    private _date: Date | undefined;

    constructor(duree: string, estJustifie: boolean, date: Date) {
        this.duree = duree;
        this.estJustifie = estJustifie;
        this.date = date;
    }

    public get duree(): string {
        return this._duree;
    }
    public set duree(value: string) {
        this._duree = value;
    }

    public get estJustifie(): boolean {
        return this._estJustifie;
    }
    public set estJustifie(value: boolean) {
        this._estJustifie = value;
    }

    public get date(): Date | undefined {
        return this._date;
    }
    public set date(value: Date | undefined) {
        this._date = value;
    }
}
