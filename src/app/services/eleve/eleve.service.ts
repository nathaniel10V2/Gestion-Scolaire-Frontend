import { inject, Injectable } from '@angular/core';
import { Eleve } from '../../models/eleve';
import { Classe } from '../../models/classe';
import { Matiere } from '../../models/matiere';
import { NoteEleve } from '../../models/noteEleve';
import { MatiereService } from '../matiere/matiere.service';
import { Absence } from '../../models/absence';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  eleveList: Eleve[] = [];
  private _matiereService = inject(MatiereService);

  creerEleve(nom: string, prenom: string, adresse: string, classe?: Classe) {
    let eleve = new Eleve(nom, prenom, adresse);
    if (this.verifierEleve(eleve)) {
      if (classe != null) {
        eleve.classe = classe;
        classe.eleves.push(eleve);
      }
      eleve.id = this.eleveList.length + 1;
      this.eleveList.push(eleve);      
    } else {
      alert("Cet élève existe déja");
    }
  }

  verifierEleve(_eleve: Eleve): boolean {
    let ok = true;
    for(let eleve of this.eleveList) {
      if (_eleve.nom == eleve.nom && _eleve.prenom == eleve.prenom) {
        ok = false;
      }
    }
    return ok;
  }

  attribuerNote(eleve: Eleve, valeur: number, nom: string) {
    if (eleve != null) {
      const matiere = this.selectionnerMatiere(eleve,nom);
      let noteEleve = new NoteEleve(matiere, [valeur]);
      eleve.notes.push(noteEleve);
    }
  }

  obtenirMatieres(eleve: Eleve): Array<Matiere> {
    let matieres: Array<Matiere> = new Array<Matiere>();
    eleve?.classe?.professeurs?.forEach(professeur => {
        if (professeur.matiere) {
            matieres.push(professeur.matiere);
        }
    });
    return matieres;
  }

  private selectionnerMatiere(eleve: Eleve, nom: string): Matiere {
    return this.obtenirMatieres(eleve).find(matiere => matiere.nom == nom) || new Matiere("");
  }

  modifierEleve(id: number, nom?: string, prenom?: string, adresse?: string, classe?: Classe) {
    let eleve = this.eleveList.find(e => e.id == id);
    if (eleve != null) {
      if (nom) {
        eleve.nom = nom;
      }
      if (prenom) {
        eleve.prenom = prenom;
      }
      if (adresse) {
        eleve.adresse = adresse;
      }
      if (classe != null && eleve.classe) {
        let index = eleve.classe.eleves.indexOf(eleve);
        eleve.classe.eleves.splice(index,1);
        eleve.classe = classe;
        classe.eleves.push(eleve);
      }
    }
  }

  donnerAbsence(id: number, duree: string, justifie: boolean, date: Date) {
    const eleve = this.eleveList.find(e => e.id == id);
    if (eleve != null) {
      const absence: Absence = new Absence(duree, justifie, date);

      console.log("absence.duree: ", eleve.absences);
      eleve.absences.push(absence);
      console.log("eleve.absences après: ", eleve.absences);
    }
  }

  supprimerEleve(id: number) {
    const eleve = this.eleveList.find(e => e.id == id);
    if (eleve != null) {
      let index = this.eleveList.indexOf(eleve);
      this.eleveList.splice(index,1);
    }
  }  
}

