import express, { Request, Response } from "express";
import {
  createUserHandler,
  getUserByIdHandler,
  getUserByUsernameHandler,
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

/**
 * @openapi
 * '/api/users/:id':
 *  get:
 *     tags:
 *     - User
 *     summary: getting user by id
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: not found
 */
router.get("/:id", async (req: Request, res: Response) =>
  getUserByIdHandler(req, res)
);

/**
 * @openapi
 * '/api/users/:username/byusername':
 *  get:
 *     tags:
 *     - User
 *     summary: getting user by username
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: not found
 */
router.get("/:username/byusername", async (req: Request, res: Response) =>
  getUserByUsernameHandler(req, res)
);
export default router;
