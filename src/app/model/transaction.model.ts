import {TransactionTypeModel} from "./transaction-type.model";

export class TransactionModel {
  transaction_id: number;
  amount: number;
  transactionType: TransactionTypeModel;
}
