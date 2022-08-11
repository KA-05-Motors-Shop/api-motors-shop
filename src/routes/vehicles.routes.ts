import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import VehicleController from "../controllers/vehicles/vehicles.controller";
import { createVehicleSchema } from "../schemas/createVehicle.schema";
import { updateVehicleSchema } from "../schemas/updateVehicle.schema";

const router = Router();

export const vehicleRouter = () => {
  router.post(
    "",
    expressYupMiddleware({ schemaValidator: createVehicleSchema }),
    VehicleController.create
  );
  router.get("", VehicleController.index);

  router.patch(
    "/:id",
    expressYupMiddleware({ schemaValidator: updateVehicleSchema }),
    VehicleController.update
  );

  router.delete("/:id", VehicleController.delete);

  return router;
};
