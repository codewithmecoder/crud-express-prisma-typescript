import { Express, Response, Request } from "express";
import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.get("/api/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  //@POST : /api/sessions
  // app.post(
  //   "/api/sessions",
  //   validateResource(createSessionSchema),
  //   createUserSessionHandler
  // );
}

export default routes;
