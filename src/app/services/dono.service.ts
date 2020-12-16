import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Dono } from '../models/dono';

@Injectable({
  providedIn: 'root'
})
export class DonoService extends BaseService {

  private url = this.API_URL + 'owner/';

  constructor(private http: HttpClient) {
    super();
  }

  public buscarDonos() {
    return this.http.get<Array<Dono>>(this.url);
  }

  public criarDono(dono: Dono){
    return this.http.post<Dono>(this.url, dono);
  }

  public atualizarDono(dono: Dono){
    return this.http.put(this.url + dono.id, dono);
  }

  public buscarDonoPorId(id:string){
    return this.http.get<Dono>(this.url + id);
  }

  public buscarPetsPorDonoId(id:string){
    return this.http.get<Dono>(this.url + id);
  }
  
  public deletarDono(id: string) {
    return this.http.delete(this.url + id);
  }
}
