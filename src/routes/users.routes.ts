import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import UserController from "../controllers/users/users.controller";
import createUserSchema from "../schemas/createUser.schema";

const router = Router();

export const userRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: createUserSchema }),
    UserController.create
  );
  router.get("", UserController.index);
  router.get("/:user_id", UserController.show);

  return router;
};
