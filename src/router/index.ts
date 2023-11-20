import express from "express";

import users from "./users";
import teams from "./teams";

const router = express.Router();

export default (): express.Router => {
  // users(router);
  teams(router);

  return router;
};
