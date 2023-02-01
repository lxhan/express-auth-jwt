export const { NODE_ENV = 'development', APP_PORT = 8000 } = process.env;

export const PROD = NODE_ENV === 'production';

export const BCRYPT_SALT_LENGTH = 12;

export const JWT_SECRET = 'secret';
