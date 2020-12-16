import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoAtualizarComponent } from './dono-atualizar.component';

describe('DonoAtualizarComponent', () => {
  let component: DonoAtualizarComponent;
  let fixture: ComponentFixture<DonoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
