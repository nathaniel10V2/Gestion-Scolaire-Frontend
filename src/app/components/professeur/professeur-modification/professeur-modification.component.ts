import { Component, inject, OnInit } from '@angular/core';
import { Professeur } from '../../../models/professeur';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';
import { ProfesseurService } from '../../../services/professeur/professeur.service';

@Component({
  selector: 'app-professeur-modification',
  standalone: false,
  
  templateUrl: './professeur-modification.component.html',
  styleUrl: './professeur-modification.component.css'
})
export class ProfesseurModificationComponent implements OnInit {

  professeur: Professeur | undefined;
  classeList: Array<Classe> = [];
  registrationForm: FormGroup;
  private classeService = inject(ClasseService);
  private professeurService = inject(ProfesseurService);

  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nom:[''],
      classe:[null]
    });
  }

  ngOnInit(): void {
    this.professeur = this.professeurService.professeurList.find(p => p.id == this.activeRoute.snapshot.params['id']);
    this.classeList = this.classeService.classeList;
    if (this.professeur) {
      let nomControl = this.registrationForm.get('nom');
      nomControl?.setValue(this.professeur.nom);
    }
  }

  modifierProfesseur() {
    if (this.professeur) {
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
      this.professeurService.modifierProfesseur(this.professeur.id, nom, classes);
      this.router.navigateByUrl("/professeur/consultation/"+this.professeur.id+"");
    }
  }
}
