import { Component, inject } from '@angular/core';
import { Classe } from '../../../models/classe';
import { ProfesseurService } from '../../../services/professeur/professeur.service';
import { DialogProfesseurComponent } from '../../dialog/dialog-professeur/dialog-professeur.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Professeur } from '../../../models/professeur';

@Component({
  selector: 'app-professeur-consultation',
  standalone: false,
  
  templateUrl: './professeur-consultation.component.html',
  styleUrl: './professeur-consultation.component.css'
})
export class ProfesseurConsultationComponent {

  professeur: Professeur | undefined;
  private professeurService = inject(ProfesseurService);
  colonne: Array<string> = ["nom"];
  modifie: boolean = false;
  private dialog = inject(MatDialog);
  classeList = new  BehaviorSubject<Classe[]>([]);

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.professeur = this.professeurService.professeurList.find(p => p.id == this.activeRoute.snapshot.params['id']);
    this.rafraichirOnglet();
  }

  rafraichirOnglet() {
    if (this.professeur) {
      if (this.professeur.classes) {
        this.classeList.next(this.professeur.classes);
      } 
    } 
  }

  supprimerClasse(classe: Classe) {
    if (this.professeur) {
      let classes;
      classes = Array.isArray(classe) ? classe : [classe];
      this.professeurService.retirerClasses(this.professeur.id, classes);
      this.rafraichirOnglet();
    }
  }
}
