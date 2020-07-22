import { Router } from 'express';
import userRoutes from './user-routes';
/**
 * @return router general handler
 */
export default () => {
  const router = Router();
  // router.use('/', (req, res) => {
  //   res.send('WELCOMME MADAFACKA');
  // });
  router.get('/', ({res})=>{
    res.send('default respone marico');
  });
  router.use('/user', userRoutes());
  return router;
};
