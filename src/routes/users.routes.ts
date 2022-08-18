import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import AddressController from "../controllers/addresses/addresses.controller";
import UserController from "../controllers/users/users.controller";
import { ValidationId } from "../middlewares/validationId.middleware";
import createUserSchema from "../schemas/createUser.schema";
import updateAddressSchema from "../schemas/updateAddress.schema";
import updateUserSchema from "../schemas/updateUser.schema";

const router = Router();

export const userRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: createUserSchema }),
    UserController.create
  );
  router.get("", UserController.index);
  router.get("/:user_id", ValidationId, UserController.show);
  router.patch(
    "/:user_id",
    ValidationId,
    expressYupMiddleware({ schemaValidator: updateUserSchema }),
    UserController.update
  );
  router.patch(
    "/:user_id/address",
    ValidationId,
    expressYupMiddleware({ schemaValidator: updateAddressSchema }),
    AddressController.update
  );
  router.delete("/:user_id", ValidationId, UserController.delete);

  return router;
};
