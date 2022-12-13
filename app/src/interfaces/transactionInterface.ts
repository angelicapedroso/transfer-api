import { IDecimal } from "../types/decimal";

export interface ITransaction {
  id: number;
  debitedAccountId: number;
  creditedAccountId: number;
  value: IDecimal;
  createAt?: Date;
}

export interface ITransactionCreate {
  debitedAccountId: number;
  value: IDecimal;
  usernameCredited: string;
}

export interface ITransactionWithUser {
  userCashIn: {
    id: number;
    username: string;
  } | null;
  transactions: ITransaction[];
}
