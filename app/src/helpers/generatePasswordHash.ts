import * as bcrypt from 'bcryptjs';

export const generatePasswordHash = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePasswordHash = (
  password: string,
  hash: string
): boolean => {
  return bcrypt.compareSync(password, hash);
};
