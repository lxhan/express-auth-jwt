import { hash } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { SigninDto, SignupDto } from '../validation/auth';
import User, { IUser } from '../models/user';
import { AlreadyExists, BadRequest } from '../errors';
import { BCRYPT_SALT_LENGTH, JWT_SECRET } from '../config';

export const generateAuthToken = (params: {
  id: string;
  email: string;
  role: string;
}) => sign(params, JWT_SECRET, { expiresIn: '24h' });

export const verifyAuthToken = (token: string): IUser => {
  const data = verify(token, JWT_SECRET);
  return data as IUser;
};

export const signUp = async (params: SignupDto) => {
  const found = await User.findOne({ email: params.email });
  if (found) {
    throw new AlreadyExists();
  }

  const hashedPassword = await hash(params.password, BCRYPT_SALT_LENGTH);
  await User.create({
    email: params.email,
    password: hashedPassword,
  });
  return { message: 'Signed up' };
};

export const signIn = async (params: SigninDto) => {
  const user = await User.findOne({ email: params.email });
  if (!user) {
    throw new BadRequest('User not found');
  }

  if (await user.comparePassword(params.password)) {
    throw new BadRequest('Password is incorrect');
  }

  const token = generateAuthToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });
  console.log(token);

  return { token };
};
