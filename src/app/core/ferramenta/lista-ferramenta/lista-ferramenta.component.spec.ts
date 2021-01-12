import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFerramentaComponent } from './lista-ferramenta.component';

describe('ListaFerramentaComponent', () => {
  let component: ListaFerramentaComponent;
  let fixture: ComponentFixture<ListaFerramentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFerramentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
