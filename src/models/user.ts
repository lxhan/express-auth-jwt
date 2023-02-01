import { model, Document, Schema } from 'mongoose';
import { compare, hash } from 'bcryptjs';
import { BCRYPT_SALT_LENGTH } from '../config';

export interface IUser {
  email: string;
  password: string;
  role: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  { timestamps: true }
);

UserSchema.pre<Document & IUser>('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, BCRYPT_SALT_LENGTH);
  }
});

UserSchema.methods.comparePassword = function (password: string) {
  compare(password, this.password);
};

export default model<Document & IUser>('user', UserSchema);
