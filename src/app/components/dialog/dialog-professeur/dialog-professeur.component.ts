import { Component, inject, Inject } from '@angular/core';
import { Classe } from '../../../models/classe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Professeur } from '../../../models/professeur';
import { ClasseService } from '../../../services/classe/classe.service';
import { ProfesseurService } from '../../../services/professeur/professeur.service';

@Component({
  selector: 'app-dialog-professeur',
  standalone: false,
  
  templateUrl: './dialog-professeur.component.html',
  styleUrl: './dialog-professeur.component.css'
})
export class DialogProfesseurComponent {

  classeList: Array<Classe> = [];
  classes: Array<Classe> = [];
  registrationForm: FormGroup;
  suppressionForm: FormGroup;
  private classeService = inject(ClasseService);
  private professeurService = inject(ProfesseurService);

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { professeur: Professeur }) {
    this.registrationForm = this.formBuilder.group({
      nom:[data.professeur.nom],
      classe:[null]
    });
    this.suppressionForm = this.formBuilder.group({
      classe:[null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    const professeur = this.data.professeur;
    if (professeur != null && professeur.classes.length > 0) {
      this.classes = this.data.professeur.classes;
    }
    this.classeList = this.classeService.classeList;
  }

  modifierProfesseur() {
    if (this.data.professeur) {
      let nomControl = this.registrationForm.get('nom');
      let classeControl = this.registrationForm.get('classe');

      let nom = "";
      let classes;
      if (nomControl != null) {
        nom = nomControl.value;
      }
      if (classeControl != null) {
        const valeur = classeControl.value;
        classes = Array.isArray(valeur) ? valeur : [valeur];
      }
      this.professeurService.modifierProfesseur(this.data.professeur.id, nom, classes);
    }
  }
}
