import express, { Request, Response } from "express";

const router = express.Router();

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     summary: Checking app running
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({ message: "We're all good!!!😁❤😘", statusCode: 200 });
});

export default router;
