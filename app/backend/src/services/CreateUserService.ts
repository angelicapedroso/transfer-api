import { User } from '../entities/User';
import { IUser, IUserCreate } from '../interfaces/userInterface';
import { generatePasswordHash } from '../helpers/generatePasswordHash';

export interface CreateUserRepository {
  create(user: User): Promise<{ user: IUser }>;
}

export class CreateUserService {
  constructor(private repository: CreateUserRepository) {}

  async create(user: IUserCreate) {
    const { username, password } = user;

    const passwordHash = await generatePasswordHash(password);

    const userEntity = new User(username, passwordHash);

    const newUser = await this.repository.create(userEntity);

    return newUser;
  }
}
