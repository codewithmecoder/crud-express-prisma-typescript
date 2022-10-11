import { Request, Response } from "express";
import { Prisma, User } from "@prisma/client";
import { createUser, getUserById, getUsers } from "../services/user.service";

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

// export async function getUserByIdHandler(req: Request<number>, res: Response) {
//   try {
//     const users = await getUserById(req);
//     res.status(200).send(users);
//   } catch (e: any) {
//     res.status(500).send({ error: true, message: e.message });
//   }
// }

// export async function getUsersHandler(req: Request, res: Response) {
//   try {
//     const users = await getUsers();
//     res.status(200).send(users);
//   } catch (e: any) {
//     res.status(500).send({ error: true, message: e.message });
//   }
// }
