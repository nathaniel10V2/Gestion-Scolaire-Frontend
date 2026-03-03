🏫 Gestion Scolaire – Frontend Angular

Ce dépôt contient le frontend de l’application de gestion d’un établissement scolaire.
L’interface web est développée avec Angular 19 et permet aux utilisateurs de consulter et gérer les données scolaires via l’API backend.

L’application met l’accent sur la facilité d’utilisation, la réactivité et une navigation fluide entre les modules.

🖥️ Fonctionnalités principales

👨‍🎓 Gestion des étudiants

Affichage de la liste des étudiants

Création et modification d’un étudiant

Consultation détaillée des informations

👩‍🏫 Gestion des enseignants

Liste des enseignants

Ajout et modification

Attribution aux classes

🏫 Gestion des classes

Affichage des classes

Association étudiants / enseignants

Navigation intuitive entre modules

🌐 Connexion au backend

Consommation d’API REST

Gestion des erreurs et messages utilisateur

Affichage dynamique des données

🎨 Interface utilisateur

Design responsive pour mobile et desktop

Composants Angular réutilisables

Utilisation de SCSS pour le styling

🛠️ Technologies utilisées

Langage principal : TypeScript

Framework : Angular 19

Routing : Angular Router

HTTP Client : Angular HttpClient

Styling : SCSS

Outils : Angular CLI, npm

🚀 Démarrer le projet
📦 Prérequis

Node.js & npm

Angular CLI

⚙️ Installation
git clone https://github.com/nathaniel10V2/Gestion-Scolaire-Frontend.git
cd Gestion-Scolaire-Frontend
npm install
ng serve

Ouvre ensuite http://localhost:4200
 dans ton navigateur.

🏗️ Structure du projet
src/
│
├── app/
│   ├── components/       # Composants Angular
│   ├── services/         # Services pour l’API
│   ├── models/           # Interfaces et modèles TypeScript
│   └── app-routing.module.ts
├── assets/
└── styles.scss
🎯 Objectif du projet

Ce frontend sert à :

Interagir avec le backend Spring Boot via des API REST

Offrir une interface intuitive pour les utilisateurs de l’établissement scolaire

Expérimenter les bonnes pratiques Angular et le développement SPA

Être facilement extensible pour des fonctionnalités futures
