import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import SessionsController from "../controllers/sessions/sessions.controller";
import { loginSchema } from "../schemas/login.schema";

const router = Router();

export const sessionRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: loginSchema }),
    SessionsController.login
  );

  return router;
};
