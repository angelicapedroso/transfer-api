import { IAccount } from "../interfaces/accountInterface";

export class Account {
  private balance: IAccount;

  constructor(balance: IAccount) {
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }
}