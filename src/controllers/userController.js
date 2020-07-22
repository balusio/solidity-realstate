// import userModel from '@models/userModel';

const registerUser = (req, res) => {
  console.log(req.query.user);
  // userModel.create({
  //   name,
  //   password,
  //   email
  // });
  res.send('INGRESASTE AL REGISTRO PRINCIPAL');
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
