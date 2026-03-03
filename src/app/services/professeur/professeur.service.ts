import { Injectable } from '@angular/core';
import { Professeur } from '../../models/professeur';
import { Classe } from '../../models/classe';
import { Matiere } from '../../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  professeurList: Array<Professeur> = new Array<Professeur>();

  public creerProfesseur(nom: string, matiere: Matiere, classeList?: Array<Classe>): Professeur {
    const professeur = new Professeur(nom);
    if (matiere) {
      this.attribuerMatiere(professeur, matiere);
    }
    if (classeList) {
      this.attribuerClasses(professeur, classeList);
    }
    professeur.id = this.professeurList.length + 1;
    this.professeurList.push(professeur);
    return professeur;
  }

  private attribuerMatiere(professeur: Professeur, matiere: Matiere) {
    professeur.matiere = matiere;
    matiere.professeurs.push(professeur);
  }

  private attribuerClasses(professeur: Professeur, classeList: Array<Classe>) {
    for (let classe of classeList) {
      this.attribuerClasse(professeur, classe);
    }
  }

  private attribuerClasse(professeur: Professeur, classe: Classe) {
    if (!classe || !Array.isArray(classe.professeurs)) {
      return;
    } 

    if (!professeur.classes.includes(classe)) {
      classe.professeurs = classe.professeurs || [];
      if (this.verifierClasseMatiere(professeur, classe)) {
        professeur.classes.push(classe);
        classe.professeurs.push(professeur);
      }
    }
  }

  private verifierClasseMatiere(professeur: Professeur, classe: Classe): boolean {
    let ok = false;
    let matieres: Array<Matiere> = [];

    if (classe && Array.isArray(classe.professeurs)) {
      classe.professeurs.forEach(p => {
        if (p.matiere) {
          matieres.push(p.matiere);
        }
      });
    }
    if (professeur.matiere) {
      if (!matieres.includes(professeur.matiere)) {
        ok = true;
      }
      else {
        alert("Il y a déja un professeur de " + professeur.matiere.nom + " dans cette classe")
      }
    } 
    return ok;
  }

  public modifierProfesseur(id: number, nom?: string, classeList?: Array<Classe>) {
    let professeur = this.professeurList.find(p => p.id == id);
    if (professeur != null) {
      if (nom != null) {
        professeur.nom = nom;
      }
      if (classeList != null) {
        this.attribuerClasses(professeur, classeList);
      }
    }
  }

  public retirerClasses(id: number, classeList?: Array<Classe>) {
    let professeur = this.professeurList.find(p => p.id == id);
    if (professeur != null) {
      if (classeList != null) {
        for (let classe of classeList) {
          this.retirerClasse(professeur, classe);
        }
      }
    }
  }

  private retirerClasse(professeur: Professeur, classe: Classe) {
    if (professeur.classes.includes(classe)) {
      const index = professeur.classes.indexOf(classe);
      professeur.classes.splice(index,1);
      const index2 = classe.professeurs.indexOf(professeur);
      classe.professeurs.splice(index2,1);
    }
  }
}
