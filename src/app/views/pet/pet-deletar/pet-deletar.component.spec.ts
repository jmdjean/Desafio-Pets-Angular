import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDeletarComponent } from './pet-deletar.component';

describe('PetDeletarComponent', () => {
  let component: PetDeletarComponent;
  let fixture: ComponentFixture<PetDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
