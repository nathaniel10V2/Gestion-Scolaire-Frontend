import { Component } from '@angular/core';
import { Matiere } from '../../../models/matiere';
import { MatiereService } from '../../../services/matiere/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere-list',
  standalone: false,
  
  templateUrl: './matiere-list.component.html',
  styleUrl: './matiere-list.component.css'
})
export class MatiereListComponent {

  matiere: Matiere | undefined;
  matiereList: Array<Matiere> = new Array<Matiere>();
  colonne: Array<string> = ["nom"];

  constructor(private matiereService: MatiereService, private router: Router) {}

  ngOnInit(): void {
    if (this.matiereService != null) {
      this.matiereList = this.matiereService.matiereList;
    }
  }

  obtenirMatiere(matiere: Matiere) {
    this.matiere = matiere;
    this.router.navigateByUrl("matiere/consultation/"+this.matiere.id);
  }
}
