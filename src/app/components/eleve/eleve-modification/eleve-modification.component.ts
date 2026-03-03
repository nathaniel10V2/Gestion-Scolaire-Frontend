import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';
import { EleveService } from '../../../services/eleve/eleve.service';
import { Eleve } from '../../../models/eleve';

@Component({
  selector: 'app-eleve-modification',
  standalone: false,
  
  templateUrl: './eleve-modification.component.html',
  styleUrl: './eleve-modification.component.css'
})
export class EleveModificationComponent implements OnInit {

  eleve: Eleve | undefined;  
  registrationForm: FormGroup;
  private _eleveService = inject(EleveService);
  private _classeService = inject(ClasseService);
  classeList: Array<Classe> | undefined;

  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', [Validators.minLength(5)]],
      prenom: ['', [Validators.minLength(3)]],
      adresse: ['', [Validators.minLength(10)]],
      classe: [null]
    });
  }

  ngOnInit(): void {
    this.eleve = this._eleveService.eleveList.find(e => e.id == this.activeRoute.snapshot.params['id']);
    this.classeList = this._classeService.classeList;
    if (this.eleve) {
      let nomControl = this.registrationForm.get('nom');
      let prenomControl = this.registrationForm.get('prenom');
      let adresseControl = this.registrationForm.get('adresse');
      let classeControl = this.registrationForm.get('classe');

      nomControl?.setValue(this.eleve.nom);
      prenomControl?.setValue(this.eleve.prenom);
      adresseControl?.setValue(this.eleve.adresse);
      classeControl?.setValue(this.eleve.classe);
    }
  }  
  
  modifierEleve() {
    if (this.eleve) {
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
      this._eleveService.modifierEleve(this.eleve.id,nom,prenom,adresse,classe);
      this.router.navigateByUrl("/eleve/consultation/"+this.eleve.id);
    }
  }
}
