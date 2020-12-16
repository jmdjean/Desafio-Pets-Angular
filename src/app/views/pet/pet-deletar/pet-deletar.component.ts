import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-deletar',
  templateUrl: './pet-deletar.component.html',
  styleUrls: ['./pet-deletar.component.scss']
})
export class PetDeletarComponent implements OnInit {

  public pet: Pet = new Pet;
  public modalRef: NgbModalRef;

  constructor(
    private donoService: PetService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.pet = this.modalRef.componentInstance.pet;
  }

  public deletarPet() {
    this.donoService.deletarPet(this.pet.id).subscribe(() => {
      this.toastr.success('', 'Pet excluído com sucesso!', { timeOut: 2000 });
      this.modalRef.close({ result: true, page: this.modalRef.componentInstance.page, acao: 'deletar' });
    }, () => {
      this.toastr.error('', 'Não foi possivel excluir o pet!', { timeOut: 2000 });
    });
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'deletar' });
  }

}
