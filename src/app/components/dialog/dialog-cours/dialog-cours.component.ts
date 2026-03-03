import { Component, inject, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classe } from '../../../models/classe';
import { Jour } from '../../../models/jour';
import { Matiere } from '../../../models/matiere';
import { ClasseService } from '../../../services/classe/classe.service';
import { EmploiDuTempsService } from '../../../services/emploi-du-temps.service';
import { Cours } from '../../../models/cours';

@Component({
  selector: 'app-dialog-classe',
  standalone: false,
  
  templateUrl: './dialog-cours.component.html',
  styleUrl: './dialog-cours.component.css'
})
export class DialogCoursComponent {

  coursForm: FormGroup;
  modificationForm: FormGroup;
  matieres: Array<Matiere> = new Array<Matiere>();
  classeList: Array<Classe> = new Array<Classe>();
  jours = Object.values(Jour);
  duree: Array<string> = ["Matin","Après-Midi"];
  coursModifie: boolean = false;
  private _classeService = inject(ClasseService);
  private _emploiDuTempsService = inject(EmploiDuTempsService);

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { classe: Classe, cours: Cours | undefined }) {
    this.modificationForm = this.formBuilder.group({
      duree:['', [Validators.required]],
      matiere:['', [Validators.required]],
      jour:['', [Validators.required]]
    });
    this.coursForm = this.formBuilder.group({
      duree:['', [Validators.required]],
      matiere:['', [Validators.required]],
      jour:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const classeTrouve = this.data.classe;
    if (classeTrouve != null) {
      this.matieres = this._classeService.obtenirMatieres(this.data.classe);
      console.log("matieres: ", this.matieres);
    }
    if (this.data.cours) {
      this.coursModifie = true;
    }
    this.classeList = this._classeService.classeList;
    console.log("this.coursModifie = ", this.coursModifie);
  }

  /*creerEmploiDuTemps() {
    let nomContol = this.classeForm.get('nom');
    //let classeeControl = this.classeForm.get('classe');
    if (nomContol) {
      const nom = nomContol.value;
      this._emploiDuTempsService.creerEmploiDuTemps(this.data.classe,nom);
    }
  }*/

  creerCours() {
    let dureeControl = this.coursForm.get('duree');
    let matiereControl = this.coursForm.get('matiere');
    let jourControl = this.coursForm.get('jour');
    if (dureeControl && matiereControl && jourControl && this.data.classe) {
      const duree = dureeControl.value;
      const matiere = matiereControl.value;
      const jour = jourControl.value;
      this._emploiDuTempsService.creerCours(duree, matiere, jour, this.data.classe);
    }
  }  

  modifierCours() {
    if (this.data.cours) {
      let dureeControl = this.modificationForm.get('duree');
      let matiereControl = this.modificationForm.get('matiere');
      let jourControl = this.modificationForm.get('jour');
      if (dureeControl && matiereControl && jourControl && this.data.classe) {
        const duree = dureeControl.value;
        const matiere = matiereControl.value;
        const jour = jourControl.value;
        this._emploiDuTempsService.modifierCours(this.data.cours, duree, matiere, jour, this.data.classe);
      }      
    }
  }
}
