import { Component, inject, OnInit } from '@angular/core';
import { Eleve } from '../../../models/eleve';
import { ActivatedRoute } from '@angular/router';
import { EleveService } from '../../../services/eleve/eleve.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEleveComponent } from '../../dialog/dialog-eleve/dialog-eleve.component';
import { BehaviorSubject } from 'rxjs';
import { NoteEleve } from '../../../models/noteEleve';
import { Absence } from '../../../models/absence';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { EmploiDuTemps } from '../../../models/emploi-du-temps';
import { Cours } from '../../../models/cours';
import { EmploiDuTempsService } from '../../../services/emploi-du-temps.service';

@Component({
  selector: 'app-eleve-consultation',
  standalone: false,
  templateUrl: './eleve-consultation.component.html',
  styleUrl: './eleve-consultation.component.css'
})
export class EleveConsultationComponent implements OnInit {

  eleve: Eleve | undefined;
  private _eleveService = inject(EleveService);
  private _emploiDuTempsService = inject(EmploiDuTempsService);
  colonneNote: Array<string> = ["matiere","notes"];
  colonneAbsence: Array<string> = ["duree","justifie","date"];
  colonneCours: Array<string> = ["jour","matiere","duree"];
  private dialog = inject(MatDialog);
  notes = new BehaviorSubject<NoteEleve[]>([]);
  absences = new  BehaviorSubject<Absence[]>([]);
  coursList: Array<Cours> = new Array<Cours>();
  noteList: Array<NoteEleve> = new Array<NoteEleve>();
  absenceList: Array<Absence> = new Array<Absence>();
  tabIndex: number = 0;
  ouvert: boolean = false;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (this._eleveService.eleveList.find(e => e.id == this.activeRoute.snapshot.params['id']) != null) {
      this.eleve = this._eleveService.eleveList.find(e => e.id == this.activeRoute.snapshot.params['id']);
      if (this.eleve) {
        if (this.eleve.notes) {
          this.notes.next(this.eleve.notes);
        }
        if (this.eleve.absences) {
          this.absences.next(this.eleve.absences);
        }
      }
    }
  }

  openDialog(): void {
    this.ouvert = true;
    const dialogRef = this.dialog.open(DialogEleveComponent, {
      data: {
        eleve: this.eleve,
        tabIndex: this.tabIndex
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      if (this.eleve) {
        this.notes.next(this.eleve.notes);
        this.absences.next(this.eleve.absences);
        this.ouvert = false;
      }
    });
  }

  rafraichirOnglet(event: MatTabChangeEvent) {
    this.tabIndex = event.index;
    this.obtenirCours();
  }

  obtenirCours() {
    if (this.eleve && this.eleve.classe) {
      const planning = this._emploiDuTempsService.obtenirCours(this.eleve.classe);
      if (planning != null) {
        this.coursList = planning;
      }
    }
  }

}
