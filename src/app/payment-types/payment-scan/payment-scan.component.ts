import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-scan',
  templateUrl: './payment-scan.component.html',
  styleUrls: ['./payment-scan.component.css']
})
export class PaymentScanComponent implements OnInit {

  recipientDetailForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.recipientDetailForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      sortCode: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit(): void {
  }

}
