import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import errorHandling from "./middlewares/errorHandling.middleware";
import express from "express";
import { appRoutes } from "./routes";
import { serve, setup } from "swagger-ui-express";
const swaggerFile = require("../swagger.json");

const app = express();

app.use(cors());
app.use(express.json());

appRoutes(app);

app.use(errorHandling);
app.use("/doc", serve, setup(swaggerFile));
export default app;
