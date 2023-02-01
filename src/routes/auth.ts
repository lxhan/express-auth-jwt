import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth';
import { signinSchema, signupSchema, validate } from '../validation';

const router = Router();

router.post('/signup', async (req, res) => {
  try {
    await validate(signupSchema, req.body);

    const result = await signUp(req.body);
    return res.json(result);
  } catch (err: any) {
    return res
      .status(err.status || 400)
      .send({ message: err.message || 'Bad request' });
  }
});

router.post('/signin', async (req, res) => {
  try {
    await validate(signinSchema, req.body);

    const result = await signIn(req.body);
    return res.json(result);
  } catch (err: any) {
    return res
      .status(err.status || 400)
      .send({ message: err.message || 'Bad request' });
  }
});

export default router;
