import express from "express";
import dotenv from "dotenv";
import createServer from "./utils/server";
dotenv.config();
import logger from "./utils/logger";

const port = process.env.PORT || 3000;
const app = createServer();
app.listen(port, async () => {
  logger.info(`App running on http://localhost:${port}`);
});
