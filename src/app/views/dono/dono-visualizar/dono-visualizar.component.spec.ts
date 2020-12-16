import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoVisualizarComponent } from './dono-visualizar.component';

describe('DonoVisualizarComponent', () => {
  let component: DonoVisualizarComponent;
  let fixture: ComponentFixture<DonoVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
