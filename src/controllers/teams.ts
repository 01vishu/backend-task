import { createTeam, getTeamById, getTeams } from "../db/teams";
import express from "express";
export const getAllTeams = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const teams = await getTeams();

    return res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOneTeam = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const team = await getTeamById(req.params.id);

    return res.status(200).json(team);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const genrateTeam = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, users } = req.body;
    const team = await createTeam({
      name,
      users,
    });
    console.log(team);
    return res.status(201).json(team);
  } catch (error) {
    console.log(error);
  }
};
