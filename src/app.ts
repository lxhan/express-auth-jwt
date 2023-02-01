import express from 'express';
import { auth, users } from './routes';
import * as types from './types';

export const createApp = () => {
  const app = express();

  app.use(express.json());

  app.use([auth, users]);

  app.use((_, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use((_, res) => {
    res.status(500).json({ message: 'Internal server error' });
  });

  return app;
};
