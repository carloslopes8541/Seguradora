import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheApoliceComponent } from './detalhe-apolice.component';

describe('DetalheApoliceComponent', () => {
  let component: DetalheApoliceComponent;
  let fixture: ComponentFixture<DetalheApoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheApoliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheApoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
