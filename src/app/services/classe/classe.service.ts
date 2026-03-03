import { Injectable } from '@angular/core';
import { Classe } from '../../models/classe';
import { EleveService } from '../eleve/eleve.service';
import { Matiere } from '../../models/matiere';
import { Eleve } from '../../models/eleve';
import { Professeur } from '../../models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  classeList: Classe[] = [];

  constructor(private eleveService: EleveService) {}

  creerClasse(nom: string) {
    let classe = new Classe(nom);
    classe.id = this.classeList.length + 1;
    this.classeList.push(classe);
  }

  obtenirMatieres(classe: Classe): Array<Matiere> {
    let matieres: Array<Matiere> = new Array<Matiere>();
    classe?.professeurs?.forEach(professeur => {
        if (professeur.matiere) {
            matieres.push(professeur.matiere);
        }
    });
    return matieres;
  }

  modifierClasse(id: number, eleveAjoute?: Array<Eleve>, professeurAjoute?: Array<Professeur>, nom?: string) {
    const classe  = this.classeList.find(c => c.id == id);
    if (classe != null) {
      if (nom) {
        classe.nom = nom;
      }

      eleveAjoute?.forEach(e => {
        if (!classe.eleves.includes(e)) {
          classe.eleves.push(e);
          e.classe = classe;
        }
      });
    
      professeurAjoute?.forEach(p => {
        if (!classe.professeurs.includes(p)) {
          console.log("OK");
          classe.professeurs.push(p);
        }
        if (!p.classes.includes(classe)) {
          p.classes.push(classe);
        }
      });
    }
  }

  supprimer(id: number, eleveSupprime: Array<Eleve>, professeurSupprime: Array<Professeur>,) {
    const classe  = this.classeList.find(c => c.id == id);
    if (classe) {
      if (eleveSupprime) {
        eleveSupprime.forEach(e => {
          const index = classe.eleves.indexOf(e);
          classe.eleves.splice(index, 1);
          e.classe = new Classe("");;
        });
      }

      if (professeurSupprime) {
        professeurSupprime.forEach(p => {
          const index = classe.professeurs.indexOf(p);
          classe.professeurs.splice(index, 1);
          const index2 = p.classes.indexOf(classe);
          p.classes.splice(index2, 1);
        });
      }     
    }
  }
}
