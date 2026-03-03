import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matiere } from '../../../models/matiere';
import { Professeur } from '../../../models/professeur';
import { MatiereService } from '../../../services/matiere/matiere.service';

@Component({
  selector: 'app-matiere-consultation',
  standalone: false,
  
  templateUrl: './matiere-consultation.component.html',
  styleUrl: './matiere-consultation.component.css'
})
export class MatiereConsultationComponent {

  matiere: Matiere | undefined;
  private matiereService = inject(MatiereService);
  colonne: Array<string> = ["nom"];
  professeurList: Array<Professeur> = [];

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.matiere = this.matiereService.matiereList.find(m => m.id == this.activeRoute.snapshot.params['id']);
    if (this.matiere) {
      this.professeurList = this.matiere.professeurs;
    }
  }
}
