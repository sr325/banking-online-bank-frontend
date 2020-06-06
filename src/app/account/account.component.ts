import {Component, OnInit} from '@angular/core';
import {AccountModel} from "../model/account.model";
import {ActivatedRoute} from "@angular/router";
import {MainPageService} from "../service/main-page.service";
import {TransactionModel} from "../model/transaction.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {

  accountId: number;
  account: AccountModel;
  transactions: TransactionModel[] = [];

  constructor(route: ActivatedRoute, private mainPageService: MainPageService) {
    this.accountId = route.snapshot.params['accountId'];
  }

  ngOnInit(): void {
    this.mainPageService.getAccount(this.accountId).subscribe(data => {
      this.account = data;
    })

    this.mainPageService.getTransactionsForAccountHolder(1).subscribe(data => {
      this.transactions = data;
    })
  }
}
