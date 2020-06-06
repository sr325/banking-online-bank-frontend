import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScanComponent } from './payment-scan.component';

describe('PaymentScanComponent', () => {
  let component: PaymentScanComponent;
  let fixture: ComponentFixture<PaymentScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
