import { Component, Inject, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Matiere } from '../../../models/matiere';
import { Eleve } from '../../../models/eleve';
import { EleveService } from '../../../services/eleve/eleve.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: false,
  
  templateUrl: './dialog-eleve.component.html',
  styleUrl: './dialog-eleve.component.css'
})
export class DialogEleveComponent implements OnInit {

  noteForm: FormGroup;
  absenceForm: FormGroup;
  matieres: Array<Matiere> = new Array<Matiere>();
  valeurs: Array<number> = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  private _eleveService = inject(EleveService);

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: { eleve: Eleve, tabIndex: number }) {
    this.noteForm = this.formBuilder.group({
      matiere:['', [Validators.required]],
      notes:['', [Validators.required]]
    });
    this.absenceForm = this.formBuilder.group({
      duree:['', [Validators.required]],
      justifie:['', [Validators.required]],
      date:['', [Validators.required, this.dateValidator]]
    });
  }

  ngOnInit(): void {
    console.log("Onglet actuel :", this.data.tabIndex);
    const eleveTrouve = this.data.eleve;
    if (eleveTrouve != null) {
      this.matieres = this._eleveService.obtenirMatieres(this.data.eleve);
      console.log("matieres: ", this.matieres);
    }
  }

  dateValidator(control: AbstractControl): ValidationErrors | null{
    if (!control.value) {
      return null;
    }
  
    const inputDate = new Date(control.value + 'T00:00:00'); // Fixe à minuit pour éviter les décalages
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Compare uniquement les jours, sans l'heure
    
    if (inputDate > today) {
      return { dateInFuture: true };
    }
  
    return null;
  }

  attribuerNote() {
    if (this.data.eleve) {
      let matiereControl = this.noteForm.get('matiere');
      let noteControl = this.noteForm.get('notes');
      if (matiereControl != null && noteControl != null) {
        const nomMatiere = matiereControl.value.nom;
        const note = noteControl.value;
        this._eleveService.attribuerNote(this.data.eleve,note,nomMatiere);
      }
      console.log("notes = ",this.data.eleve.notes);
    }
  }

  donnerAbsence() {
    if (this.data.eleve) { 
      let dureeControl = this.absenceForm.get('duree');
      let justifieControl = this.absenceForm.get('justifie');
      let dateControl = this.absenceForm.get('date');
      if (dureeControl != null && justifieControl != null && dateControl != null) {
        const duree = dureeControl.value;
        const justifie = justifieControl.value;
        const date = dateControl.value;
        this._eleveService.donnerAbsence(this.data.eleve.id,duree,justifie,date);
      }
    }
  }
}
