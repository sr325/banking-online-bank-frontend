import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-bank-details',
  templateUrl: './payment-bank-details.component.html',
  styleUrls: ['./payment-bank-details.component.css']
})
export class PaymentBankDetailsComponent implements OnInit {

  accountTyes: string[] = ['Personal', 'Business'];
  paymentBankDetailForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.paymentBankDetailForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      sortCode: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

}
