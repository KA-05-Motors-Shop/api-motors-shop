import { Router } from "express";
import VehicleController from "../controllers/vehicles/vehicles.controller";

const router = Router()


export const vehicleRouter = () => {
    router.post('', VehicleController.create)

    return router
}