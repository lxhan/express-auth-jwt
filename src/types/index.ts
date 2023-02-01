import { IUser } from '../models/user';

declare module 'express' {
  export interface Request {
    user?: IUser;
  }
}
