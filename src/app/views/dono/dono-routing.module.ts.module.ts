import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonoListagemComponent } from './dono-listagem/dono-listagem.component';

const ownerRoutes: Routes = [
  { path: '', component: DonoListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})
export class DonoRoutingModule { }
