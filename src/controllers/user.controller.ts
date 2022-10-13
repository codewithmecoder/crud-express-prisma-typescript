import { Request, Response } from "express";
import { Prisma, User } from "@prisma/client";
import {
  createUser,
  getUserById,
  getUserByUsername,
  getUsers,
} from "../services/user.service";

export async function createUserHandler(
  req: Request<{}, {}, Prisma.UserCreateInput>,
  res: Response<User>
) {
  try {
    const user = await createUser(req.body);
    return res.status(201).send(user);
  } catch (e: any) {
    res.status(409).send(e.message);
  }
}

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (e: any) {
    res.status(500).send({ error: true, message: e.message });
  }
}

export async function getUserByIdHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    if (isNaN(parseInt(id)))
      return res.status(400).send({ error: true, message: "id is not valid" });
    const user = await getUserById(parseInt(id));
    if (!user) return res.status(404).send();
    res.status(200).send(user);
  } catch (e: any) {
    res.status(500).send({ error: true, message: e.message });
  }
}

export async function getUserByUsernameHandler(req: Request, res: Response) {
  try {
    const username = req.params.username;
    const user = await getUserByUsername(username);
    if (!user) return res.status(404).send();
    res.status(200).send(user);
  } catch (e: any) {
    res.status(500).send({ error: true, message: e.message });
  }
}
