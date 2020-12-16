import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListagemComponent } from './pet-listagem.component';

describe('PetListagemComponent', () => {
  let component: PetListagemComponent;
  let fixture: ComponentFixture<PetListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
