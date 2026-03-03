import { Injectable } from '@angular/core';
import { EmploiDuTemps } from '../models/emploi-du-temps';
import { Matiere } from '../models/matiere';
import { Classe } from '../models/classe';
import { Jour } from '../models/jour';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {

  emploiDuTempsList: Array<EmploiDuTemps> = new Array<EmploiDuTemps>();

  public creerEmploiDuTemps(classe: Classe, nom: string) {
    if (classe != null) {
      const emploiDuTemps = new EmploiDuTemps(classe);
      if (nom != null) {
        emploiDuTemps.nom = nom;
      }
      this.emploiDuTempsList.push(emploiDuTemps);
    }
  }

  public creerCours(duree: string, matiere: Matiere, jour: Jour, classe: Classe) {
    if (duree && matiere && jour && classe) {
      const cours = new Cours(matiere, duree, jour);
      classe.cours.push(cours);
      /*let emploiDuTemps = this.obtenirEmploiDuTemps(nom);
      if (emploiDuTemps != null) {
        emploiDuTemps.cours.push(cours);
        console.log("emploiDuTemps: ",emploiDuTemps);
      } else {
        console.log("RIEN 3");
      }*/
    }
  }

  public obtenirCours(classe: Classe): Array<Cours> | undefined {
    return classe.cours;
  }

  public trierCours(classe: Classe): Array<Cours> {
    let tab: Cours[] = [];
    let tabTemp: Cours[] = [];
    const jours = Object.values(Jour).filter(j => typeof j == "string");
    const map = new Map(jours.map((value,index) => [value, index]));

    if (classe?.cours) { 
      tabTemp = classe.cours.filter(c => c.jour);
    
      tab = tabTemp.sort((a, b) => {
        if(a.jour && b.jour) {
          return (map.get(a.jour) ?? Infinity) - (map.get(b.jour) ?? Infinity);
        } else {
          return 0;
        }
      });
      this.trierDuree(tab);
    }
    return tab;
  }

  private trierDuree(list: Array<Cours>) {
    list.sort((a,b) => {
      let resultat = 0;
      if (a.jour == b.jour) {
        if (a.duree == "Matin" && b.duree == "Après-Midi") {
          resultat = -1;
        } 
        if (b.duree == "Matin" && a.duree == "Après-Midi") {
          resultat = 1;
        }   
      }
      return resultat;
    });
  }

  public modifierCours(cours: Cours, duree: string, matiere: Matiere, jour: Jour, classe: Classe) {
    if (classe && classe.cours.includes(cours)) {
      if (duree) {
        cours.duree = duree;
      }
      if (matiere) {
        cours.matiere = matiere;
      }
      if (jour) {
        cours.jour = jour;
      }      
    }
  }
}
