import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdicionarComponent } from './pet-adicionar.component';

describe('PetAdicionarComponent', () => {
  let component: PetAdicionarComponent;
  let fixture: ComponentFixture<PetAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
