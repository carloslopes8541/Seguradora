import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroApoliceComponent } from './cadastro-apolice.component';

describe('CadastroApoliceComponent', () => {
  let component: CadastroApoliceComponent;
  let fixture: ComponentFixture<CadastroApoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroApoliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroApoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
