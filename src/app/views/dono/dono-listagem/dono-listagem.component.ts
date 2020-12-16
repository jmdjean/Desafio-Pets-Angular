import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Dono } from 'src/app/models/dono';
import { DonoService } from 'src/app/services/dono.service';
import { ModalService } from 'src/app/services/shared/modal.service';

@Component({
  selector: 'app-dono-listagem',
  templateUrl: './dono-listagem.component.html',
  styleUrls: ['./dono-listagem.component.scss']
})
export class DonoListagemComponent implements OnInit {

  constructor(
    private donoService: DonoService,
    private modalService: ModalService,
    private spinner: NgxSpinnerService
  ) { }

  public nomeTela = "Donos";
  public donos: Array<Dono>;

  public filtro: string;

  ngOnInit(): void {
    this.donos = [];
    this.modalService.resultConfirmDialog$.asObservable().subscribe(res => {
      if (res != undefined) {
        if (res.result && res.page === 'dono') {
          this.buscarDonos();
        }
      }
    })

    this.buscarDonos();
  }

  public abrirModalAdicionar() {
    this.modalService.abrirModalCadastroDono();
  }

  public abriModalDeletar(dono: Dono) {
    this.modalService.abrirModalDeletarDono(dono);
  }

  public abriModalEditar(dono: Dono) {
    let donoEditar = {id: dono.id, name: dono.name, email: dono.email, phone: dono.phone };
    this.modalService.abrirModalAtualizarDono(donoEditar);
  }

  public abriModalVisualizar(dono: Dono){
    this.modalService.abrirModalVisualizarDono(dono);
  }

  public buscarDonos() {
    this.spinner.show();

    this.donoService.buscarDonos()
      .subscribe(res => {
        this.donos = res;
          this.spinner.hide();
      }, error => {
        this.donos = [];
        this.spinner.hide();
      });
  }

}
