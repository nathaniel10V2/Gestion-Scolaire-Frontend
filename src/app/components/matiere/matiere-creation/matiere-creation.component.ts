import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatiereService } from '../../../services/matiere/matiere.service';

@Component({
  selector: 'app-matiere-creation',
  standalone: false,
  
  templateUrl: './matiere-creation.component.html',
  styleUrl: './matiere-creation.component.css'
})
export class MatiereCreationComponent {

  registrationForm: FormGroup;

  constructor(private matiereService: MatiereService, private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', [Validators.required]]
    });
  }

  creerMatiere() {
    let nameControl = this.registrationForm.get('nom');
    if (nameControl != null) {
      let name = nameControl.value;
      this.matiereService.creerMatiere(name);
      nameControl.setValue('');
    }
  }
}
