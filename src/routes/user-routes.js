import { Router } from 'express';
import { registerUser } from '@controllers/userController';

export default () => {
  const router = Router();
  router.use('/register', registerUser);

  router.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
    next();
  });

  return router;
};
