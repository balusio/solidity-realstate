import userModel from '@models/userModel';
import { reset } from 'nodemon';

const registerUser = (req, res) => {
  console.log(req.body.userQuery);
  const { userQuery, password, email } = req.body;
  console.log(userQuery,password, email)
  userModel.findOne({
    email
  },
  (err, user) => {
    if (err) {
      res.err(400);
    } else if (user) {
      console.log('FOUND USER');
      res.send('User already exist');
    } else {
      // eslint-disable-next-line new-cap
      const newUser = new userModel({
        name: userQuery,
        password,
        email,
      });
      newUser.save().then((data) => {
        console.log(data);
        res.send('usuario creado anda apra la wallet');
      }).catch((error) => {
        console.log(error);
        res.send('error de usuario');
      });
    }
  });
};

const loginUser = ({ req, res, next }) => {
  const { username, password } = req.body;

  userModel.findOne({
    username,
  }, (err, user) => {
    if (err) res.send('error, usuario no encontrado');

    user.comparePassword(password, ({ err: passErr, isMatch }) => {
      if (passErr) res.send('error validando');
      if(isMatch) {
        next();
      } else {
        res.send('contrasena invalida');
      }
    });
  });
};

export { registerUser, loginUser };
