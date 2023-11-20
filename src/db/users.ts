import mongoose from "mongoose";

// User Config
const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true },
  domain: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },
  available: { type: Boolean, required: true },
});
export const UserModel = mongoose.model("User", UserSchema);

// User Actions
export const getUsers = (filter: any, options: any) =>
  UserModel.find(filter, null, options);
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
