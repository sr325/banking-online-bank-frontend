import {AccountModel} from "./account.model";

export class AccountHolderModel {
  accountHoldUid: number;
  firstName: String;
  lastName: String;
  emailAddress: String;
  accounts: AccountModel[] = [];
}
