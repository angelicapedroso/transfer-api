import * as bcrypt from 'bcrypt';

export const generatePasswordHash = async (
  password: string
): Promise<String> => {
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
