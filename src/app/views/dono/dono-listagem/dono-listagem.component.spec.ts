import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoListagemComponent } from './dono-listagem.component';

describe('DonoListagemComponent', () => {
  let component: DonoListagemComponent;
  let fixture: ComponentFixture<DonoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
