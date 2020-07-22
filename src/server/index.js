import express from 'express';
import userController from '@controllers/userController';
import userModels from '@models/userModel';

const app = express();

app.get('/', (req, res) => {
  req?.log?.test;
  res.send(userController.hello);
});

app.listen(4000, () => {
  console.log('app is listening to port 4000');
});
