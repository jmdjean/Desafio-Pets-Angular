import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Dono } from 'src/app/models/dono';
import { DonoService } from 'src/app/services/dono.service';

@Component({
  selector: 'app-dono-atualizar',
  templateUrl: './dono-atualizar.component.html',
  styleUrls: ['./dono-atualizar.component.scss']
})
export class DonoAtualizarComponent implements OnInit {

  public dono: Dono = new Dono;
  public modalRef: NgbModalRef;

  public mensagemErroNome = '';
  public mensagemErroEmail = '';
  public mensagemErroTelefone = '';

  public editarNomeModal: string;

  constructor(
    private donoService: DonoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.limparValidacao();
    this.popularDono();
  }

  public atualizar() {
    if (this.validarDono()) {
      this.atualizarDono();
    }
  }

  public popularDono() {
    this.dono = this.modalRef.componentInstance.donoEditar;
    this.editarNomeModal = this.dono.name;
  }

  public atualizarDono() {
    this.donoService.atualizarDono(this.dono).subscribe(() => {
      this.toastr.success('', 'Dono atualizado com sucesso!', { timeOut: 2000 });
      this.modalRef.close({ result: true, page: this.modalRef.componentInstance.page, acao: 'cadastro' });
    }, () => {
      this.toastr.error('', 'Não foi possivel atualizar o dono!', { timeOut: 2000 });
    });
  }

  public limparValidacao() {
    this.mensagemErroNome = '';
    this.mensagemErroEmail = '';
    this.mensagemErroTelefone = '';
  }

  public validarDono() {
    this.limparValidacao();

    if (this.dono != undefined) {
      if (this.dono.name == undefined || this.dono.name == '') {
        this.mensagemErroNome = 'Nome inválido.';
      }
      else if (this.dono.name.length < 3) {
        this.mensagemErroNome = 'Nome precisa ter mais de 3 caracteres.';
      }
      else if (this.dono.name.length >= 150) {
        this.mensagemErroNome = 'Nome precisa ter menos de 150 caracteres..';
      }
      if (this.dono.email == undefined || !this.dono.email.includes('@') || !this.dono.email.includes('.com')) {
        this.mensagemErroEmail = 'Email inválido.';
      }
      if (this.dono.phone == undefined || this.dono.phone == '' || this.dono.phone.length < 10) {
        this.mensagemErroTelefone = 'Telefone inválido.';
      }

      if (this.mensagemErroNome || this.mensagemErroEmail || this.mensagemErroTelefone) {
        return false;
      }
      return true;
    }

    return false;
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'atualizar' });
  }

}
