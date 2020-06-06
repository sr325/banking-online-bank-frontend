import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../service/main-page.service";
import {TransactionModel} from "../model/transaction.model";
import {AccountHolderModel} from "../model/account-holder.model";
import {AccountModel} from "../model/account.model";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  accountHolderId: number;
  accountHolderName: String;
  accountHolderSurname: String;
  accountId: number;

  accountHolder: AccountHolderModel;
  accounts: AccountModel[] = [];
  source: LocalDataSource;

  settings = {
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'Delete data',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      accountUid: {
        title: 'ID',
      },
    },
  };

  constructor(private mainPageService: MainPageService) {
  }

  ngOnInit(): void {
    this.mainPageService.getAccountHolderByAccountHolderUid(1).subscribe(data => {
      this.accountHolder = data;
      this.accountHolderName = this.accountHolder.firstName;
      this.accountHolderSurname = this.accountHolder.lastName;
      // this.source.load(this.accountHolder.accounts);
      this.accountHolderId = data.accountHolderUid;
      console.log(this.accountHolder);
      this.accounts = this.accountHolder.accounts;
      console.log(this.accounts);

    })
  }

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    console.log("Create Event In Console")
    console.log(event);

  }

  onSaveConfirm(event) {
    console.log("Edit Event In Console")
    console.log(event);
  }
}
