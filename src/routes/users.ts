import { Router } from 'express';
import { authUser } from '../middleware';
import { getUsers } from '../controllers/users';

const router = Router();

router.get('/api/users', authUser, async (_, res) => {
  try {
    const result = await getUsers();
    return res.json(result);
  } catch (err: any) {
    return res
      .status(err.status || 400)
      .send({ message: err.message || 'Bad request' });
  }
});

export default router;
