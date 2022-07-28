import "express-async-errors";
import "reflect-metadata";

import cors from "cors";
import errorHandling from "./middlewares/errorHandling.middleware";
import express from "express";
import { appRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

appRoutes(app);

app.use(errorHandling);

export default app;
