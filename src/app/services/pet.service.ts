import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PetService extends BaseService{

  private url = this.API_URL + 'pets/';

  constructor(private http: HttpClient) {
    super();
  }

  public buscarPets() {
    return this.http.get<Array<Pet>>(this.url);
  }

  public criarPet(pet: Pet){
    return this.http.post<Pet>(this.url, pet);
  }

  public atualizarPet(pet: Pet){
    return this.http.put(this.url + pet.id, pet);
  }

  public buscarPetPorId(id:string){
    return this.http.get<Pet>(this.url + id);
  }
  
  public deletarPet(id: string) {
    return this.http.delete(this.url + id);
  }
}
