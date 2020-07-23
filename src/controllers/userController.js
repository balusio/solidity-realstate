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
        password: password,
        email: email,
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

  // if (existUser) {
  //   res.send('lo siento usuario registrado0');
  // } else {
  //   const createdUser = userModel.createOne({
  //     name,
  //     password,
  //     email
  //   });

  //   console.log(createdUser);
  //   const checkedUser = userModel.findOne({
  //     email
  //   });
  //   console.log('user found', checkedUser);
  //   res.send(`INGRESASTE AL REGISTRO PRINCIPAL, ${checkedUser.email}`);
  // }
};

const loginUser = (user) => {
  const { name, password, email } = user;

  // userModel.findOne({
  //   name,
  //   password,
  //   email
  // });
};

export { registerUser, loginUser };
