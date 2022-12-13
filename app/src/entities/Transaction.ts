import { IDecimal } from '../types/decimal';

export class Transaction {
  private debitedAccountId: number;
  private creditedAccountId: number;
  private usernameCredited: string;
  private value: IDecimal;

  constructor(
    debitedAccountId: number,
    creditedAccountId: number,
    usernameCredited: string,
    value: IDecimal
  ) {
    this.debitedAccountId = debitedAccountId;
    this.creditedAccountId = creditedAccountId;
    this.value = value;
    this.usernameCredited = usernameCredited;
  }

  getDebitedAccountId(): number {
    return this.debitedAccountId;
  }

  getValue(): IDecimal {
    return this.value;
  }

  getUsernameCredited(): string {
    return this.usernameCredited;
  }

  getCreditedAccountId(): number {
    return this.creditedAccountId;
  }
}
