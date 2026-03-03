import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MatiereCreationComponent } from './components/matiere/matiere-creation/matiere-creation.component';
import { MatiereListComponent } from './components/matiere/matiere-list/matiere-list.component';
import { MatiereConsultationComponent } from './components/matiere/matiere-consultation/matiere-consultation.component';
import { ProfesseurCreationComponent } from './components/professeur/professeur-creation/professeur-creation.component';
import { ProfesseurListComponent } from './components/professeur/professeur-list/professeur-list.component';
import { ProfesseurConsultationComponent } from './components/professeur/professeur-consultation/professeur-consultation.component';
import { ProfesseurModificationComponent } from './components/professeur/professeur-modification/professeur-modification.component';
import { ClasseCreationComponent } from './components/classe/classe-creation/classe-creation.component';
import { ClasseListComponent } from './components/classe/classe-list/classe-list.component';
import { ClasseConsultationComponent } from './components/classe/classe-consultation/classe-consultation.component';
import { EleveCreationComponent } from './components/eleve/eleve-creation/eleve-creation.component';
import { EleveListComponent } from './components/eleve/eleve-list/eleve-list.component';
import { EleveConsultationComponent } from './components/eleve/eleve-consultation/eleve-consultation.component';
import { EleveModificationComponent } from './components/eleve/eleve-modification/eleve-modification.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'matiere',
    component: MatiereListComponent
  },
  {
    path: 'matiere/creation',
    component: MatiereCreationComponent
  },
  {
    path: 'matiere/consultation/:id',
    component: MatiereConsultationComponent
  },
  {
    path: 'professeur',
    component: ProfesseurListComponent
  },
  {
    path: 'professeur/creation',
    component: ProfesseurCreationComponent
  },
  {
    path: 'professeur/consultation/:id',
    component: ProfesseurConsultationComponent
  },
  {
    path: 'professeur/modification/:id',
    component: ProfesseurModificationComponent
  },
  {
    path: 'classe',
    component: ClasseListComponent
  },
  {
    path: 'classe/creation',
    component: ClasseCreationComponent
  },
  {
    path: 'classe/consultation/:id',
    component: ClasseConsultationComponent
  },
  {
    path: 'eleve',
    component: EleveListComponent
  },
  {
    path: 'eleve/creation',
    component: EleveCreationComponent
  },
  {
    path: 'eleve/consultation/:id',
    component: EleveConsultationComponent
  },
  {
    path: 'eleve/modification/:id',
    component: EleveModificationComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
