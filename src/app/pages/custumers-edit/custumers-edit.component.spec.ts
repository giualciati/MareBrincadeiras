import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumersEditComponent } from './custumers-edit.component';

describe('CustumersEditComponent', () => {
  let component: CustumersEditComponent;
  let fixture: ComponentFixture<CustumersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustumersEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
