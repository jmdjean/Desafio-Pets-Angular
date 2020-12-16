import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListagemComponent } from './pet-listagem/pet-listagem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetRoutingModule } from './pet-routing.module';
import { PetService } from 'src/app/services/pet.service';
import { PetAdicionarComponent } from './pet-adicionar/pet-adicionar.component';
import { PetAtualizarComponent } from './pet-atualizar/pet-atualizar.component';
import { PetDeletarComponent } from './pet-deletar/pet-deletar.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { PetVisualizarComponent } from './pet-visualizar/pet-visualizar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    PetListagemComponent,
    PetAdicionarComponent,
    PetAtualizarComponent,
    PetDeletarComponent,
    PetVisualizarComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    HttpClientModule,
    PetRoutingModule,
    NgSelectModule,
    Ng2SearchPipeModule
  ],
  providers: [PetService]
})
export class PetModule { }
