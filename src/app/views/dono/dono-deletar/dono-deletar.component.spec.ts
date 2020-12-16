import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoDeletarComponent } from './dono-deletar.component';

describe('DonoDeletarComponent', () => {
  let component: DonoDeletarComponent;
  let fixture: ComponentFixture<DonoDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
