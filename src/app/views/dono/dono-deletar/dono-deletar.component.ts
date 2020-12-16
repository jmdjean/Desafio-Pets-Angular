import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Dono } from 'src/app/models/dono';
import { DonoService } from 'src/app/services/dono.service';

@Component({
  selector: 'app-dono-deletar',
  templateUrl: './dono-deletar.component.html',
  styleUrls: ['./dono-deletar.component.scss']
})
export class DonoDeletarComponent implements OnInit {

  public dono: Dono = new Dono;
  public modalRef: NgbModalRef;

  constructor(
    private donoService: DonoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dono = this.modalRef.componentInstance.dono;
  }

  public deletarDono() {
    this.donoService.deletarDono(this.dono.id).subscribe(() => {
      this.toastr.success('', 'Dono excluído com sucesso!', { timeOut: 2000 });
      this.modalRef.close({ result: true, page: this.modalRef.componentInstance.page, acao: 'deletar' });
    }, () => {
      this.toastr.error('', 'Não foi possivel excluir o dono!', { timeOut: 2000 });
    });
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'deletar' });
  }

}
