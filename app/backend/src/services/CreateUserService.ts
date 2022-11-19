import { User } from '../entities/User';
import { IUserCreate } from '../interfaces/userInterface';
import { generatePasswordHash } from '../helpers/generatePasswordHash';

export interface CreateUserRepository {
  create(user: User): Promise<void>;
}

export class CreateUserService {
  constructor(private repository: CreateUserRepository) {}

  async create(user: IUserCreate) {
    const { username, password } = user;
    const newUser = new User(username, password);
    const passwordHash = generatePasswordHash(newUser.getPassword());
    newUser.setPassword(generatePasswordHash(passwordHash));
    await this.repository.create(newUser);
  }
}
