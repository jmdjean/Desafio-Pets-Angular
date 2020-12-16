import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAtualizarComponent } from './pet-atualizar.component';

describe('PetAtualizarComponent', () => {
  let component: PetAtualizarComponent;
  let fixture: ComponentFixture<PetAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
