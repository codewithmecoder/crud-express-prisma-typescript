import express, { Request, Response } from "express";
import {
  createUserHandler,
  getUsersHandler,
} from "../controllers/user.controller";

const router = express.Router();
/**
 * @openapi
 * '/api/users/':
 *  post:
 *     tags:
 *     - User
 *     summary: create user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UserCreateInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserCreateResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/", async (req: Request, res: Response) =>
  createUserHandler(req, res)
);

/**
 * @openapi
 * '/api/users/getUsers':
 *  get:
 *     tags:
 *     - User
 *     summary: getting all active users
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.get("/getUsers", async (req: Request, res: Response) =>
  getUsersHandler(req, res)
);

export default router;
