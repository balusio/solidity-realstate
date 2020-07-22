import { Model, Schema } from 'mongoose';

// Create a simple User's schema
const userSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: Date,
  loginUsing: String,
});

const userModel = new Model('User', userSchema);

module.exports = userModel;
