export interface IUser extends IUserCreate {
  id: number;
}

export interface IUserCreate {
  username: string;
  password: string;
}