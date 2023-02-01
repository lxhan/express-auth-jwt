const {
  MONGO_USER = 'admin',
  MONGO_PASS = 'pass',
  MONGO_HOST = 'localhost',
  MONGO_PORT = 27017,
  MONGO_DB_NAME = 'test',
} = process.env;

export const MONGO_URL = `mongodb://${MONGO_USER}:${encodeURIComponent(
  MONGO_PASS
)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;
