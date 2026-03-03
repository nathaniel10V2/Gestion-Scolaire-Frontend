import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ClasseListComponent } from './components/classe/classe-list/classe-list.component';
import { ClasseCreationComponent } from './components/classe/classe-creation/classe-creation.component';
import { ClasseConsultationComponent } from './components/classe/classe-consultation/classe-consultation.component';
import { MatiereCreationComponent } from './components/matiere/matiere-creation/matiere-creation.component';
import { MatiereListComponent } from './components/matiere/matiere-list/matiere-list.component';
import { MatiereConsultationComponent } from './components/matiere/matiere-consultation/matiere-consultation.component';
import { ProfesseurListComponent } from './components/professeur/professeur-list/professeur-list.component';
import { ProfesseurCreationComponent } from './components/professeur/professeur-creation/professeur-creation.component';
import { ProfesseurModificationComponent } from './components/professeur/professeur-modification/professeur-modification.component';
import { ProfesseurConsultationComponent } from './components/professeur/professeur-consultation/professeur-consultation.component';
import { EleveListComponent } from './components/eleve/eleve-list/eleve-list.component';
import { EleveCreationComponent } from './components/eleve/eleve-creation/eleve-creation.component';
import { EleveConsultationComponent } from './components/eleve/eleve-consultation/eleve-consultation.component';
import { EleveModificationComponent } from './components/eleve/eleve-modification/eleve-modification.component';
import { DialogEleveComponent } from './components/dialog/dialog-eleve/dialog-eleve.component';
import { DialogEleveModificationComponent } from './components/dialog/dialog-eleve-modification/dialog-eleve-modification.component';
import { DialogCoursComponent } from './components/dialog/dialog-cours/dialog-cours.component';
import { DialogProfesseurComponent } from './components/dialog/dialog-professeur/dialog-professeur.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ClasseListComponent,
    ClasseCreationComponent,
    ClasseConsultationComponent,
    MatiereCreationComponent,
    MatiereListComponent,
    MatiereConsultationComponent,
    ProfesseurListComponent,
    ProfesseurCreationComponent,
    ProfesseurModificationComponent,
    ProfesseurConsultationComponent,
    EleveListComponent,
    EleveCreationComponent,
    EleveConsultationComponent,
    EleveModificationComponent,
    ConnexionComponent,
    DialogEleveComponent,
    DialogEleveModificationComponent,
    DialogCoursComponent,
    DialogProfesseurComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
