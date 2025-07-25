import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presentacion2Component } from './presentacion2.component';

describe('Presentacion2Component', () => {
  let component: Presentacion2Component;
  let fixture: ComponentFixture<Presentacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presentacion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Presentacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
