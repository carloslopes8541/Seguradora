import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarApoliceComponent } from './atualizar-apolice.component';

describe('AtualizarApoliceComponent', () => {
  let component: AtualizarApoliceComponent;
  let fixture: ComponentFixture<AtualizarApoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarApoliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarApoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
