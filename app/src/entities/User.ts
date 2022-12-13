import { ValidationError } from '../errors/validationError';

export class User {
  private static MIN_USERNAME_LENGTH = 3;
  private static MIN_PASSWORD_LENGTH = 8;
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.validateUsername(username);
    this.validatePassword(password);

    this.username = username;
    this.password = password;
  }

  private validateUsername(username: string) {
    if (username.length < User.MIN_USERNAME_LENGTH) {
      throw new ValidationError('Must be at least 3 characters long');
    }
  }

  private validatePassword(password: string) {
    if (password.length < User.MIN_PASSWORD_LENGTH) {
      throw new ValidationError('Must be at least 8 characters long');
    }
  }

  public getUsername() {
    return this.username;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(password: string) {
    this.password = password;
  }
}
