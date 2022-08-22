import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import VehicleController from "../controllers/vehicles/vehicles.controller";
import AuthToken from "../middlewares/isAuthToken.middleware";
import IsOwner from "../middlewares/isOwnerOfVehicle.middleware";
import { ValidationId } from "../middlewares/validationId.middleware";
import { createVehicleSchema } from "../schemas/createVehicle.schema";
import { updateVehicleSchema } from "../schemas/updateVehicle.schema";

const router = Router();

export const vehicleRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: createVehicleSchema }),
    AuthToken,
    VehicleController.create
  );
  router.get("", VehicleController.index);
  router.get("/:id",ValidationId, VehicleController.show);

  router.patch(
    "/:id",
    ValidationId,
    expressYupMiddleware({ schemaValidator: updateVehicleSchema }),
    AuthToken,
    IsOwner,
    VehicleController.update
  );

  router.delete("/:id",ValidationId, AuthToken, IsOwner, VehicleController.delete);

  return router;
};
