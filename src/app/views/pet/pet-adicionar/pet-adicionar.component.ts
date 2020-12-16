import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Dono } from 'src/app/models/dono';
import { Pet } from 'src/app/models/pet';
import { DonoService } from 'src/app/services/dono.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-adicionar',
  templateUrl: './pet-adicionar.component.html',
  styleUrls: ['./pet-adicionar.component.scss']
})
export class PetAdicionarComponent implements OnInit {

  public donos: Array<Dono>;
  public pet: Pet = new Pet;
  public modalRef: NgbModalRef;

  public mensagemErroNome = '';
  public mensagemErroApelido = '';
  public mensagemErroRaca = '';
  public mensagemErroEspecie = '';
  public mensagemErroDono = '';

  constructor(
    private donoService: DonoService,
    private petService: PetService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.donos = [];
    this.buscarDono();
    this.limparValidacao();
  }


  public salvar() {
    if (this.validar()) {
      this.cadastrar();
    }
  }

  public cadastrar() {
    this.petService.criarPet(this.pet).subscribe(() => {
      this.toastr.success('', 'Pet cadastrado com sucesso.', { timeOut: 2000 });
      this.modalRef.close({ result: true, page: this.modalRef.componentInstance.page, acao: 'cadastro' });
    }, () => {
      this.toastr.error('', 'Não foi possivel cadastrar o pet!', { timeOut: 2000 });
    });
  }

  public limparValidacao() {
    this.mensagemErroNome = '';
    this.mensagemErroApelido = '';
    this.mensagemErroRaca = '';
    this.mensagemErroEspecie = '';
    this.mensagemErroDono = '';
  }

  public validar() {
    this.limparValidacao();

    if (this.pet != undefined) {
      /* NOME */
      if (this.pet.name == undefined || this.pet.name == '') {
        this.mensagemErroNome = 'Nome inválido.';
      }

      /* NICKNAME */
      if (this.pet.nickName == undefined || this.pet.nickName == '') {
        this.mensagemErroApelido = 'Apelido inválido.';
      }

      /* RAÇA */
      if (this.pet.breed == undefined || this.pet.breed == '') {
        this.mensagemErroRaca = 'Raça inválida.';
      }

      /* ESPECIE */
      if (this.pet.species == undefined || this.pet.species == '') {
        this.mensagemErroEspecie = 'Especie inválida.';
      }

      /* DONO */
      if (this.pet.ownerId == undefined || this.pet.ownerId == '') {
        this.mensagemErroDono = 'Dono inválido.';
      }

      if (this.mensagemErroNome || this.mensagemErroApelido || this.mensagemErroRaca || this.mensagemErroEspecie || this.mensagemErroDono) {
        return false;
      }
      return true;
    }

    return false;
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'cadastro' });
  }

  public buscarDono() {
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
