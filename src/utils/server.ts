import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import indexRouter from "../routes/index.route";
import userRouter from "../routes/user.route";
import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../../package.json";
export default function createServer() {
  const app = express();
  const swaggerDefinition: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "CRUD Prisma API Docs",
        description: "CRUD Prisma Application API",
        version,
        license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT",
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./src/routes/**.ts"],
  };
  // const swaggerSpec = swaggerJsdoc(swaggerDefinition);
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
// router.use("/api-docs", swaggerUi.serve);
// router.get("/api-docs", swaggerUi.setup(swaggerDocument));
