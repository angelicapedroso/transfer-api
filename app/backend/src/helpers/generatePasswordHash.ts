import * as bcrypt from 'bcryptjs';

export const generatePasswordHash = async (
  password: string
): Promise<string> => {
  const salt = 10;
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePasswordHash = async (
  password: string,
  hash: string
): Promise<Boolean> => {
  const isValid = bcrypt.compare(password, hash);
  return isValid;
};
