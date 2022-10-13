import dotenv from "dotenv";
import createServer from "./utils/server";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});
import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
const port = process.env.PORT || "4000";
const app = createServer();
app.listen(port, async () => {
  logger.info(`App running on http://localhost:${port}`);
  swaggerDocs(app, port);
});
