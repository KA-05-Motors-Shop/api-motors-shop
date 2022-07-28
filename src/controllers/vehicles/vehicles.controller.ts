import { Request, Response } from "express";

import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";
import createVehicleService from "../../services/vehicles/createVehicle.service";
import ListCarsService from "../../services/vehicles/getVehicle.service";

class VehicleController {
  static async create(req: Request, res: Response) {
    const {
      title,
      type_of_ad,
      year,
      km,
      price,
      description,
      type_of_vehicle,
      cover_image,
      gallery_image,
    } = req.body;

    const newVehicle = await createVehicleService({
      title,
      type_of_ad,
      cover_image,
      description,
      gallery_image,
      km,
      price,
      type_of_vehicle,
      year,
    });

    return res.status(201).json(newVehicle);
  }

  static async index(req: Request, res: Response) {
    const listCars = new ListCarsService();
    const cars = await listCars.execute();
    return res.json(cars);
  }
}

export default VehicleController;
