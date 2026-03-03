import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-connexion',
  standalone: false,
  
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  estInscrit: boolean = true;  
  connexionForm: FormGroup;
  inscriptionForm: FormGroup;

  constructor(private utilisateurService: UtilisateurService, private formBuilder: FormBuilder) {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      motdepasse: ['', [Validators.required]]
    });
    this.inscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      motdepasse: ['', [Validators.required]],
      confirmationMdp: ['', [Validators.required]],
    });
  }

  inscription() {
    if (this.utilisateurService) {
      const emailControl = this.inscriptionForm.get('email');
      if (emailControl) {
        const email = emailControl.value;
        
      }
    }    
  }

  connexion() {
    if (this.utilisateurService) {
      
    }
  }
}
