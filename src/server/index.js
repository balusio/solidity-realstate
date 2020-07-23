import express from 'express';
import { connect, connection } from 'mongoose';
import router from '@routes';

const app = express();

connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });

connection.on('error', () => {
  console.error.bind(console, 'connection error:');
});
app.use(express.json());
app.use(router());
app.listen(4200, () => {
  console.log('app is listening to port 4200');
});
connection.once('open', () => {
  console.log('connction open');
});
