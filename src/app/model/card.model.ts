import {AccountCategoryModel} from "./account-category.model";
import {BalanceModel} from "./balance.model";
import {AccountLimitModel} from "./account-limit.model";
import {TransactionModel} from "./transaction.model";

export class CardModel {
  id: number;
  name: string;
  number: number;
  sortCode: String;
  accountNumber: number;
  expirationDate: Date;
  cvv2Number: number;
  category: AccountCategoryModel;
  balance: BalanceModel;
  accountLimit: AccountLimitModel;
  transactions: TransactionModel[] = [];
}
