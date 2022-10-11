import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import indexRouter from "../routes/index.route";
import userRouter from "../routes/user.route";
import swaggerJSDoc from "swagger-jsdoc";
export default function createServer() {
  const app = express();
  const swaggerDefinition = {
    openapi: "3.0.0",

    info: {
      title: "VIOS DOCS",
      version: "1.0.0",
      description: "",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    host: "localhost:8888",
    basePath: "/",
    securityDefinitions: {
      api_key: {
        type: "apiKey",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
  };

  const options = {
    swaggerDefinition,
    apis: ["../routes/**.ts"],
  };

  const swaggerSpec = swaggerJSDoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use("/api", indexRouter);
  app.use("/api/users", userRouter);
  return app;
}

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
// router.use("/api-docs", swaggerUi.serve);
// router.get("/api-docs", swaggerUi.setup(swaggerDocument));
