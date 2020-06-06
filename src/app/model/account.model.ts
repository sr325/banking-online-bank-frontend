import {CardModel} from "./card.model";

export class AccountModel {
  accountUid: number;
  description: String;
  createdAt: Date;
  card: CardModel;
}
