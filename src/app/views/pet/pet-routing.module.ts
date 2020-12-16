import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListagemComponent } from './pet-listagem/pet-listagem.component';

const ownerRoutes: Routes = [
  { path: '', component: PetListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})

export class PetRoutingModule { }
