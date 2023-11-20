import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
import { UserModel as User } from "./users";
const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [
    {
      type: ObjectId,
      ref: User.modelName,
    },
  ],
});
export const TeamModel =
  mongoose.model("Team", TeamSchema) || mongoose.models.Team;

// Teams Action
export const getTeams = () => TeamModel.find().populate("users");
export const getTeamById = (id: string) =>
  TeamModel.findById(id).populate("users");
export const createTeam = (values: Record<string, any>) =>
  new TeamModel(values).save().then((team) => team.toObject());
