import express from "express";

import {
  deleteUserById,
  getUsers,
  getUserById,
  createUser,
  updateUserById,
} from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      page = 1,
      limit = 10,
      domain,
      gender,
      available,
      search,
    }: any = req.query;

    // Construct the filter object based on query parameters
    const filter: any = {};
    if (domain) filter.domain = domain;
    if (gender) filter.gender = gender;
    if (available) filter.available = available;

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const options = {
      skip: (page - 1) * limit,
      limit: parseInt(limit),
    };
    const users = await getUsers(filter, options);

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOneUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await getUserById(req.params.id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const genrateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { first_name, last_name, email, domain, available, avatar, gender } =
      req.body;
    const user = await createUser({
      first_name,
      last_name,
      email,
      domain,
      available,
      avatar,
      gender,
    });
    console.log(user);
    return res.status(201).json(user);
  } catch (error) {}
};
export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);
    if (!user) {
      return res.sendStatus(400);
    }

    const updatedUser = await updateUserById(id, req.body);
    return res.status(200).json(updatedUser).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
