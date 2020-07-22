import { Model, Schema } from 'mongoose';

// Create a simple User's schema
const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = new Model('User', userSchema);

module.exports = userModel;
