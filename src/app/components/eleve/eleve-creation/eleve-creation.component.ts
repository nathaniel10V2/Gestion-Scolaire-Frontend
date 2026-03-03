import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EleveService } from '../../../services/eleve/eleve.service';
import { Router } from '@angular/router';
import { Classe } from '../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';

@Component({
  selector: 'app-eleve',
  standalone: false,
  
  templateUrl: './eleve-creation.component.html',
  styleUrl: './eleve-creation.component.css'
})
export class EleveCreationComponent implements OnInit {

  registrationForm: FormGroup;
  private _eleveService = inject(EleveService);
  private _classeService = inject(ClasseService);
  classeList: Array<Classe> | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(5)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      adresse: ['', [Validators.required, Validators.minLength(10)]],
      classe: [null, [Validators.required, this.classeValidator]],
    });
  }

  ngOnInit(): void {
    this.classeList = this._classeService.classeList;
  }

  classeValidator(control: AbstractControl): ValidationErrors | null {
     return control.value instanceof Classe ? null : { invalidClasse: true };
  }

  creerEleve() {
    let nomControl = this.registrationForm.get('nom');
    let prenomControl = this.registrationForm.get('prenom');
    let adresseControl = this.registrationForm.get('adresse');
    let classeControl = this.registrationForm.get('classe');
    console.log("classeControl.value = ", classeControl?.value);
    if (nomControl != null && prenomControl != null && adresseControl != null && classeControl != null && this._eleveService) {
      let nom = nomControl.value;
      let prenom = prenomControl.value;
      let adresse = adresseControl.value;
      let classe = classeControl.value;
      console.log("classeControl.value1 = ", classeControl.value);
      this._eleveService.creerEleve(nom,prenom,adresse,classe);
      nomControl.setValue('');
      prenomControl.setValue('');
      adresseControl.setValue('');
      classeControl.setValue(null);
      console.log("classeControl.value2 = ", classeControl.value);
    }
  }
}