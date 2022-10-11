import express, { Request, Response } from "express";
import {
  createUserHandler,
  getUsersHandler,
} from "../controllers/user.controller";

const router = express.Router();

router
  .get("/", (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: "Getting user here!!!😁❤😘", statusCode: 200 });
  })
  .post("/", async (req: Request, res: Response) => createUserHandler(req, res))
  .get("/getUsers", async (req: Request, res: Response) =>
    getUsersHandler(req, res)
  );

export default router;
