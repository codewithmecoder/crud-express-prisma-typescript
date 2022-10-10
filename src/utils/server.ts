import cors from "cors";
import express from "express";
import routes from "../routes";

export default function createServer() {
  const app = express();
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  routes(app);
  return app;
}
