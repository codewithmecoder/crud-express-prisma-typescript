import express, { Request, Response } from "express";

const router = express.Router();

/**
 * @swagger
 * /api/:
 *  get:
 *    description: Checking health of the application
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "We're all good!!!😁❤😘", statusCode: 200 });
});

export default router;
