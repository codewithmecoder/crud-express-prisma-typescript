import cors from "cors";
import express from "express";
import indexRouter from "../routes/index.route";
import userRouter from "../routes/user.route";
export default function createServer() {
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use("/", indexRouter);
  app.use("/api/users", userRouter);
  return app;
}
