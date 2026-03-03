import { Injectable } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurList: Array<Utilisateur> = Array<Utilisateur>();

  creerUtilisateur(email: string, motDePasse: string) {
    const utilisateur = new Utilisateur(email, motDePasse);
    utilisateur.id = this.utilisateurList.length + 1;
    this.utilisateurList.push(utilisateur);
  }
}
