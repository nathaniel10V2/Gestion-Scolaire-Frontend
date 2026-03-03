import { Injectable } from '@angular/core';
import { Matiere } from '../../models/matiere';
import { Professeur } from '../../models/professeur';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  matiereList: Matiere[] = [];

  creerMatiere(nom: string) {
    let matiere = new Matiere(nom);
    matiere.id = this.matiereList.length + 1;
    this.matiereList.push(matiere);
  }
}
