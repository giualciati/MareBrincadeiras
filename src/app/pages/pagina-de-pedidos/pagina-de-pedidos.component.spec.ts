import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDePedidosComponent } from './pagina-de-pedidos.component';

describe('PaginaDePedidosComponent', () => {
  let component: PaginaDePedidosComponent;
  let fixture: ComponentFixture<PaginaDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDePedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
