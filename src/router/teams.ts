import express from "express";
import { genrateTeam, getAllTeams, getOneTeam } from "../controllers/teams";

export default (router: express.Router) => {
  router.get("/teams", getAllTeams);
  router.get("/teams/:id", getOneTeam);
  router.post("/teams/create", genrateTeam);
  // router.delete("/teams/:id", deleteUser);
  // router.put("/teams/:id", updateUser);
};
