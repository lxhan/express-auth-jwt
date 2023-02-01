import User, { IUser } from '../models/user';

const mapUsers = (user: IUser) => {
  return {
    email: user.email,
    role: user.role,
  };
};

export const getUsers = async () => {
  const users = await User.find({});

  return users.map(mapUsers);
};
