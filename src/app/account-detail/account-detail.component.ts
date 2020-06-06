import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MainPageService} from "../service/main-page.service";
import {AccountModel} from "../model/account.model";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountId: number;
  account: AccountModel;

  constructor(route: ActivatedRoute, private mainPageService: MainPageService) {
    this.accountId = route.snapshot.params['accountId'];
  }

  ngOnInit(): void {
    this.mainPageService.getAccount(this.accountId).subscribe(data => {
      this.account = data;
    })
  }
}
