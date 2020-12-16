import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Dono } from 'src/app/models/dono';
import { Pet } from 'src/app/models/pet';
import { DonoService } from 'src/app/services/dono.service';
import { PetService } from 'src/app/services/pet.service';
import { ModalService } from 'src/app/services/shared/modal.service';

@Component({
  selector: 'app-pet-listagem',
  templateUrl: './pet-listagem.component.html',
  styleUrls: ['./pet-listagem.component.scss']
})
export class PetListagemComponent implements OnInit {

  constructor(
    private donoService: DonoService,
    private petService: PetService,
    private modalService: ModalService,
    private spinner: NgxSpinnerService
  ) { }

  public nomeTela = "Pets";
  public pets: Array<Pet>;
  public donos: Array<Dono>;

  public filtro: string;

  ngOnInit(): void {
    this.modalService.resultConfirmDialog$.asObservable().subscribe(res => {
      if (res != undefined) {
        if (res.result && res.page === 'pet') {
          this.buscarPets();
        }
      }
    })

    this.buscarPets();
  }

  public abrirModalAdicionar() {
    this.modalService.abrirModalCadastroPet();
  }

  public abriModalDeletar(pet: Pet) {
    this.modalService.abrirModalDeletarPet(pet);
  }

  public abriModalEditar(pet: Pet) {
    let petEditar = {
      id: pet.id,
      name: pet.name,
      nickName: pet.nickName,
      ownerId: pet.ownerId,
      breed: pet.breed,
      species: pet.species
    };

    this.modalService.abrirModalAtualizarPet(petEditar);
  }

  public abriModalVisualizar(pet: Pet) {
    this.modalService.abrirModalVisualizarPet(pet);
  }

  public buscarPets() {
    this.spinner.show();

    this.petService.buscarPets()
      .subscribe(res => {
        this.pets = res;
        this.buscarDono();
      }, error => {
        this.pets = [];
        this.spinner.hide();
      });
  }

  public buscarDono() {
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

    this.pets.forEach(pet => {
      let dono = this.donos.find(d => d.id == pet.ownerId);
      if (dono) {
        pet.donoName = dono.name;
        pet.donoPhone = dono.phone;
      }
    });
  }
}
