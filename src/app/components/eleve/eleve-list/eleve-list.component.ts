import { Component, OnInit } from '@angular/core';
import { Eleve } from '../../../models/eleve';
import { EleveService } from '../../../services/eleve/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-list',
  standalone: false,
  
  templateUrl: './eleve-list.component.html',
  styleUrl: './eleve-list.component.css'
})
export class EleveListComponent implements OnInit {

  eleve: Eleve | undefined;
  eleveList: Array<Eleve> = new Array<Eleve>();
  colonne: Array<string> = ["nom","prenom","adresse","classe"];

  constructor(private eleveService: EleveService, private router: Router) {}

  ngOnInit(): void {
    if (this.eleveService != null) {
      this.eleveList = this.eleveService.eleveList;
    }
  }

  obtenirEleve(eleve: Eleve) {
    this.eleve = eleve;
    this.router.navigateByUrl('eleve/consultation/'+ this.eleve.id);
  }
}
