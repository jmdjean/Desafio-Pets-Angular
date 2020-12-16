import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonoListagemComponent } from './dono-listagem/dono-listagem.component';
import { DonoRoutingModule } from './dono-routing.module.ts.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { DonoAdicionarComponent } from './dono-adicionar/dono-adicionar.component';
import { DonoAtualizarComponent } from './dono-atualizar/dono-atualizar.component';
import { HttpClientModule } from '@angular/common/http';
import { DonoService } from 'src/app/services/dono.service';
import { DonoDeletarComponent } from './dono-deletar/dono-deletar.component';
import { DonoVisualizarComponent } from './dono-visualizar/dono-visualizar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    DonoListagemComponent,
    DonoAdicionarComponent,
    DonoAtualizarComponent,
    DonoDeletarComponent,
    DonoVisualizarComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    DonoRoutingModule
  ],
  providers: [DonoService],
})
export class DonoModule { }
