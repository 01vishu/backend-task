import express from "express";

import {
  getAllUsers,
  deleteUser,
  generateUser,
  updateUser,
  getOneUser,
} from "../controllers/users";
const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.delete("/users/:id", deleteUser);
router.post("/users/create", generateUser);
router.put("/users/:id", updateUser);

export default router;
