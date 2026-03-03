import { Component } from '@angular/core';
import { Professeur } from '../../../models/professeur';
import { ProfesseurService } from '../../../services/professeur/professeur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professeur-list',
  standalone: false,
  
  templateUrl: './professeur-list.component.html',
  styleUrl: './professeur-list.component.css'
})
export class ProfesseurListComponent {
  
  professeur: Professeur | undefined;
  professeurList: Array<Professeur> = new Array<Professeur>();
  colonne: Array<string> = ["nom","matiere"];

  constructor(private professeurService: ProfesseurService, private router: Router) {}

  ngOnInit(): void {
    if (this.professeurService != null) {
      this.professeurList = this.professeurService.professeurList;
    }
  }

  obtenirProfesseur(professeur: Professeur) {
    this.professeur = professeur;
    this.router.navigateByUrl('professeur/consultation/'+ this.professeur.id);
  }
}
