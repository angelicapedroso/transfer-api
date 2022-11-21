import { ValidationError } from './../errors/validationError';
import { User } from '../entities/User';
import { IUser, IUserCreate } from '../interfaces/userInterface';
import { comparePasswordHash } from '../helpers/generatePasswordHash';
import { generateToken } from '../helpers/generateToken';

export interface LoginRepository {
  findUnique(user: User): Promise<IUser | null>;
}

export class LoginService {
  constructor(private repository: LoginRepository) {}

  async login(user: IUserCreate) {
    const { username, password } = user;
    const newUser = new User(username, password);
    const userFound = await this.repository.findUnique(newUser);
    if (!userFound) {
      throw new ValidationError('User not found');
    }
    const decodedPassword = comparePasswordHash(password, userFound.password);
    if (!decodedPassword) {
      throw new ValidationError('Credentials not valid');
    }
    const token = generateToken(username);
    return { token };
  }
}
