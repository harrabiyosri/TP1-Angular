import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { MenuComponent } from './menu/menu.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
