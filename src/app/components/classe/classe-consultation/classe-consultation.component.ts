import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Classe } from '../../../models/classe';
import { Cours } from '../../../models/cours';
import { ClasseService } from '../../../services/classe/classe.service';
import { EmploiDuTempsService } from '../../../services/emploi-du-temps.service';
import { DialogCoursComponent } from '../../dialog/dialog-cours/dialog-cours.component';
import { Eleve } from '../../../models/eleve';
import { Professeur } from '../../../models/professeur';
import { DialogEleveModificationComponent } from '../../dialog/dialog-eleve-modification/dialog-eleve-modification.component';
import { DialogProfesseurComponent } from '../../dialog/dialog-professeur/dialog-professeur.component';
import { ProfesseurService } from '../../../services/professeur/professeur.service';

@Component({
  selector: 'app-classe-consultation',
  standalone: false,
  
  templateUrl: './classe-consultation.component.html',
  styleUrl: './classe-consultation.component.css'
})
export class ClasseConsultationComponent {

  classe: Classe | undefined;
  private _classeService = inject(ClasseService);
  private _emploiDuTempsService = inject(EmploiDuTempsService);
  private professeurService = inject(ProfesseurService);
  colonneCours: Array<string> = ["jour","matiere","duree"];
  colonneEleve: Array<string> = ["nom","prenom"];
  colonneProfesseur: Array<string> = ["nom","matiere"];
  ouvert: boolean = false;
  private dialog = inject(MatDialog);
  coursListAffichee = new  BehaviorSubject<Cours[]>([]);
  eleves = new  BehaviorSubject<Eleve[]>([]);
  professeurs = new  BehaviorSubject<Professeur[]>([]);;
  cours: Cours | undefined;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (this._classeService.classeList.find(c => c.id == this.activeRoute.snapshot.params['id']) != null) {
      this.classe = this._classeService.classeList.find(c => c.id == this.activeRoute.snapshot.params['id']);
      this.rafraichirOnglet();
    }
    
  }

  openDialog(): void {
    this.ouvert = true;
    const dialogRef = this.dialog.open(DialogCoursComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '50%',
      height: '70%',
      data: {
        classe: this.classe,
        cours: this.cours
      }
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.rafraichirOnglet();
      this.ouvert = false;
    });
  }

  rafraichirOnglet() {
    if (this.classe) {
      if (this.classe.cours) {
        this.coursListAffichee.next(this.classe.cours);
      } 
      if (this.classe.eleves) {
        this.eleves.next(this.classe.eleves);
      } 
      console.log("this.classe.professeurs: ", this.classe.professeurs);
      if (this.classe.professeurs) {
        this.professeurs.next(this.classe.professeurs);
      }
    } 
  }

  openDialogEleve(eleve: Eleve) {
    const dialogRef = this.dialog.open(DialogEleveModificationComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '50%',
      height: '70%',
      data: {
        eleve: eleve
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.rafraichirOnglet();
    });
  }

  openDialogProfesseur(professeur: Professeur) {
    const dialogRef = this.dialog.open(DialogProfesseurComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '55%',
      height: '70%',
      data: {
        professeur: professeur
      }
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.rafraichirOnglet();
    });
  }

  trier() {
    if (this.classe) {
      this.classe.cours = this._emploiDuTempsService.trierCours(this.classe);
      this.coursListAffichee.next(this.classe.cours);
      this.coursListAffichee.pipe
      console.log("coursTrier: ", this.classe.cours);
    }
  }

  modifierCours(cours: Cours) {
    if (cours) {
      this.cours = cours;
      this.openDialog();
    }
  }

  modifier(professeur: Professeur) {
    this.openDialogProfesseur(professeur);
  }

  supprimer(professeur: Professeur) {
    if (this.classe && professeur.classes.includes(this.classe)) {
      let classes;
      classes = Array.isArray(this.classe) ? this.classe : [this.classe];
      this.professeurService.retirerClasses(professeur.id, classes);
      this.rafraichirOnglet();
    }
  }
}
