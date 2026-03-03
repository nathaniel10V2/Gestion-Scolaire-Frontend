import { Component, inject, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classe } from '../../../models/classe';
import { Eleve } from '../../../models/eleve';
import { ClasseService } from '../../../services/classe/classe.service';
import { EleveService } from '../../../services/eleve/eleve.service';

@Component({
  selector: 'app-dialog-eleve-modification',
  standalone: false,
  
  templateUrl: './dialog-eleve-modification.component.html',
  styleUrl: './dialog-eleve-modification.component.css'
})
export class DialogEleveModificationComponent {
  
  registrationForm: FormGroup;
  private _eleveService = inject(EleveService);
  private _classeService = inject(ClasseService);
  classeList: Array<Classe> | undefined;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { eleve: Eleve }) {
    this.registrationForm = this.formBuilder.group({
      nom: [data.eleve.nom, [Validators.minLength(5)]],
      prenom: [data.eleve.prenom, [Validators.minLength(3)]],
      adresse: [data.eleve.adresse, [Validators.minLength(10)]],
      classe: [data.eleve.classe]
    });
  }

  ngOnInit(): void {
    this.classeList = this._classeService.classeList;
  }  
  
  modifierEleve() {
    if (this.data.eleve) {
      let nomControl = this.registrationForm.get('nom');
      let prenomControl = this.registrationForm.get('prenom');
      let adresseControl = this.registrationForm.get('adresse');
      let classeControl = this.registrationForm.get('classe');

      let nom = "";
      let prenom = "";
      let adresse = "";
      let classe: Classe | undefined;
      
      if (nomControl != null) {
        nom = nomControl.value;
      }
      if (prenomControl != null) {
        prenom = prenomControl.value;
      }
      if (adresseControl != null) {
        adresse = adresseControl.value;
      }
      if (classeControl != null) {
        classe = classeControl.value;
      }
      this._eleveService.modifierEleve(this.data.eleve.id,nom,prenom,adresse,classe);
    }
  }
}
