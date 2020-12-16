import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVisualizarComponent } from './pet-visualizar.component';

describe('PetVisualizarComponent', () => {
  let component: PetVisualizarComponent;
  let fixture: ComponentFixture<PetVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
