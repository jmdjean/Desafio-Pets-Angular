import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Dono } from 'src/app/models/dono';

@Component({
  selector: 'app-dono-visualizar',
  templateUrl: './dono-visualizar.component.html',
  styleUrls: ['./dono-visualizar.component.scss']
})
export class DonoVisualizarComponent implements OnInit {

  public dono: Dono = new Dono;
  public modalRef: NgbModalRef;

  public camposBloqueados = true;
  
  constructor() { }

  ngOnInit(): void {
    this.popularDono();
  }

  public popularDono() {
    this.dono = this.modalRef.componentInstance.dono;
  }

  public fecharModal() {
    this.modalRef.close({ result: false, page: this.modalRef.componentInstance.page, acao: 'visualizar' });
  }

}
