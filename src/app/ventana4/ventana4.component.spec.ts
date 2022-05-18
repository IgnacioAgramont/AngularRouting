import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventana4Component } from './ventana4.component';

describe('Ventana4Component', () => {
  let component: Ventana4Component;
  let fixture: ComponentFixture<Ventana4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ventana4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventana4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
