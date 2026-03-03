import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfesseurService } from '../../../services/professeur/professeur.service';
import { Matiere } from '../../../models/matiere';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { Classe } from '../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';

@Component({
  selector: 'app-professeur-creation',
  standalone: false,
  
  templateUrl: './professeur-creation.component.html',
  styleUrl: './professeur-creation.component.css'
})
export class ProfesseurCreationComponent implements OnInit{

  registrationForm: FormGroup;
  matiereList: Array<Matiere> = new Array<Matiere>();
  classeList: Array<Classe> | undefined;
  private _matiereService = inject(MatiereService);
  private _professeurService = inject(ProfesseurService);
  private _classeService = inject(ClasseService);

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      matiere: ['', [Validators.required]],
      classe: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.matiereList = this._matiereService.matiereList;
    this.classeList = this._classeService.classeList;
  }

  creerProfesseur() {
    let nameControl = this.registrationForm.get('nom');
    let matiereControl = this.registrationForm.get('matiere');
    let classeControl = this.registrationForm.get('classe');
    if (nameControl != null && matiereControl != null) {
      let name = nameControl.value;
      let matiere = matiereControl.value;
      let classes = classeControl?.value;
      this._professeurService.creerProfesseur(name,matiere,classes);
      nameControl.setValue("");
      matiereControl.setValue("");
    }
  }
}
