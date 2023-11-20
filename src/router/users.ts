import express from "express";

import {
  getAllUsers,
  deleteUser,
  genrateUser,
  updateUser,
  getOneUser,
} from "../controllers/users";

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.get("/users/:id", getOneUser);
  router.delete("/users/:id", deleteUser);
  router.post("/users/create", genrateUser);
  router.put("/users/:id", updateUser);
};
