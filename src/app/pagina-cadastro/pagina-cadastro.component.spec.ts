import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCadastroComponent } from './pagina-cadastro.component';

describe('PaginaCadastroComponent', () => {
  let component: PaginaCadastroComponent;
  let fixture: ComponentFixture<PaginaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCadastroComponent]
    });
    fixture = TestBed.createComponent(PaginaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
