import mongoose from 'mongoose';
import { createApp } from './app';
import { APP_PORT, MONGO_URL } from './config';

(async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(MONGO_URL);

  const app = createApp();

  app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
})();
