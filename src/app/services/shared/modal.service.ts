import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Dono } from 'src/app/models/dono';
import { ResultadoModal } from 'src/app/models/resultadoModal';
import { DonoAdicionarComponent } from 'src/app/views/dono/dono-adicionar/dono-adicionar.component';
import { DonoAtualizarComponent } from 'src/app/views/dono/dono-atualizar/dono-atualizar.component';
import { DonoDeletarComponent } from 'src/app/views/dono/dono-deletar/dono-deletar.component';
import { DonoVisualizarComponent } from 'src/app/views/dono/dono-visualizar/dono-visualizar.component';
import { PetAdicionarComponent } from 'src/app/views/pet/pet-adicionar/pet-adicionar.component';
import { PetAtualizarComponent } from 'src/app/views/pet/pet-atualizar/pet-atualizar.component';
import { PetDeletarComponent } from 'src/app/views/pet/pet-deletar/pet-deletar.component';
import { PetVisualizarComponent } from 'src/app/views/pet/pet-visualizar/pet-visualizar.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  resultConfirmDialog$ = new Subject<ResultadoModal>();

  constructor(private ngbModal: NgbModal) { }

    /* MODAL DONO */

  public abrirModalCadastroDono() {
    const modalRef = this.ngbModal.open(DonoAdicionarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'dono';

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalAtualizarDono(donoEditar: any) {
    const modalRef = this.ngbModal.open(DonoAtualizarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'dono';
    modalRef.componentInstance.donoEditar = donoEditar;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalDeletarDono(dono: any) {
    const modalRef = this.ngbModal.open(DonoDeletarComponent, {
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'dono';
    modalRef.componentInstance.dono = dono;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalVisualizarDono(dono: any) {
    const modalRef = this.ngbModal.open(DonoVisualizarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'dono';
    modalRef.componentInstance.dono = dono;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  /* MODAL PETS */

  public abrirModalCadastroPet() {
    const modalRef = this.ngbModal.open(PetAdicionarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'pet';

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalAtualizarPet(petEditar: any) {
    const modalRef = this.ngbModal.open(PetAtualizarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'pet';
    modalRef.componentInstance.petEditar = petEditar;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalDeletarPet(pet: any) {
    const modalRef = this.ngbModal.open(PetDeletarComponent, {
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'pet';
    modalRef.componentInstance.pet = pet;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }

  public abrirModalVisualizarPet(pet: any) {
    const modalRef = this.ngbModal.open(PetVisualizarComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.page = 'pet';
    modalRef.componentInstance.pet = pet;

    modalRef.result.then(res => {
      this.resultConfirmDialog$.next(res);
    }).catch(error => { });
  }
}
