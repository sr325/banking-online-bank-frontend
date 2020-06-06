import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.css']
})
export class PaymentTypesComponent implements OnInit {

  accountHolderContacts: string[] = ['Luna Rana', 'Shishir Rana', 'Samiksha Rana', 'Leena Rana', 'Brizy Rana'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
