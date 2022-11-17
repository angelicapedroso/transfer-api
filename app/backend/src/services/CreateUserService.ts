import { User } from "../entities/User";

export interface createUserRepository {
  create(user: User): Promise<{ id: number }>
}

export class CreateUserService {
  constructor(
    private repository: createUserRepository,
  ){}

  async create(username: string, password: string) {
    const user = new User(username, password);
    const { id } = await this.repository.create(user);
    return id;
  }
}
