import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Dono } from 'src/app/models/dono';
import { Pet } from 'src/app/models/pet';
import { DonoService } from 'src/app/services/dono.service';

@Component({
  selector: 'app-pet-visualizar',
  templateUrl: './pet-visualizar.component.html',
  styleUrls: ['./pet-visualizar.component.scss']
})
export class PetVisualizarComponent implements OnInit {

  public pet: Pet = new Pet;
  public donos: Array<Dono>;
  public modalRef: NgbModalRef;

  public camposBloqueados = true;

  constructor(
    private donoService: DonoService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.buscarDonos();
    this.popularPet();
  }

  public popularPet() {
    this.pet = this.modalRef.componentInstance.pet;
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'visualizar' });
  }

  public buscarDonos() {
    this.spinner.show();
    this.donoService.buscarDonos()
      .subscribe(res => {
        this.donos = res;
        this.vincularDonoAoPet();
        this.spinner.hide();
      }, error => {
        this.donos = [];
        this.spinner.hide();
      });
  }

  public vincularDonoAoPet() {

    let dono = this.donos.find(d => d.id == this.pet.ownerId);
    if (dono) {
      this.pet.donoName = dono.name;
      this.pet.donoEmail = dono.email;
      this.pet.donoPhone = dono.phone;
    }
  };
}


