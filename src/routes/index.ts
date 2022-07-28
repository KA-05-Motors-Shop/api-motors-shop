import { Express } from "express";
import { vehicleRouter } from "./vehicles.routes";


export const appRoutes = (app: Express) => {
    app.use('/vehicles', vehicleRouter())
}