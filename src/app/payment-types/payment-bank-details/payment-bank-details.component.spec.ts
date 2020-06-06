import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBankDetailsComponent } from './payment-bank-details.component';

describe('PaymentBankDetailsComponent', () => {
  let component: PaymentBankDetailsComponent;
  let fixture: ComponentFixture<PaymentBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
