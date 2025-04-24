import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardManagerComponent } from './product-card-manager.component';

describe('ProductCardManagerComponent', () => {
  let component: ProductCardManagerComponent;
  let fixture: ComponentFixture<ProductCardManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
