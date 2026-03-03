import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../../services/classe/classe.service';

@Component({
  selector: 'app-classe-creation',
  standalone: false,
  
  templateUrl: './classe-creation.component.html',
  styleUrl: './classe-creation.component.css'
})
export class ClasseCreationComponent {

  registrationForm: FormGroup;

  constructor(private classeService: ClasseService, private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      nom: ['', [Validators.required]]
    });
  }

  creerClasse() {
    let nameControl = this.registrationForm.get('nom');
    if (nameControl != null) {
      let name = nameControl.value;
      this.classeService.creerClasse(name);
      nameControl.setValue('');
    }
  }
}
