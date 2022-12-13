import { Decimal } from "@prisma/client/runtime";
import { IAccount } from "../interfaces/accountInterface";

export interface UpdateAccountRepository {
  update(id: number, balance: Decimal): Promise<IAccount>;
}

export class UpdateAccountService {
  constructor(private repository: UpdateAccountRepository) {}

  async update(id: number, balance: Decimal) {
    const account = await this.repository.update(id, balance);
    return account;
  }
}
