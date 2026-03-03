import { Component, OnInit } from '@angular/core';
import { Classe } from '../../../models/classe';
import { ClasseService } from '../../../services/classe/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-list',
  standalone: false,
  
  templateUrl: './classe-list.component.html',
  styleUrl: './classe-list.component.css'
})
export class ClasseListComponent implements OnInit{

  classe: Classe | any;
  classeList: Array<Classe> = Array<Classe>();
  colonne: Array<string> = ["nom"];

  constructor(private classeService: ClasseService, private router: Router) {}

  ngOnInit(): void {
      if (this.classeService != null) {
        this.classeList = this.classeService.classeList;
      }
    }

  obtenirClasse(classe: Classe) {
    this.classe = classe;
    this.router.navigateByUrl('classe/consultation/'+ this.classe.id);
  }    
}
