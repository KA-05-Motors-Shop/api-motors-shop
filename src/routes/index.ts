import { Express } from "express";
import { userRouter } from "./users.routes";
import { vehicleRouter } from "./vehicles.routes";

export const appRoutes = (app: Express) => {
  app.use("/vehicles", vehicleRouter());
  app.use("/users", userRouter());
};
