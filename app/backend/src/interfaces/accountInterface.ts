import { Decimal } from "@prisma/client/runtime";

export interface IAccount {
  id: number;
  balance: Decimal;
}

export interface IAccountWithUser {
  id: number;
  username: string;
  account: {
    balance: Decimal;
  }
}
