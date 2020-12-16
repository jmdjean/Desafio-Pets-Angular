import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoAdicionarComponent } from './dono-adicionar.component';

describe('DonoAdicionarComponent', () => {
  let component: DonoAdicionarComponent;
  let fixture: ComponentFixture<DonoAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
