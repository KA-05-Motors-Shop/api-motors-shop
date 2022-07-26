import { Request, Response } from "express";

import createVehicleService from "../../services/vehicles/createVehicle.service";
import deleteVehicleService from "../../services/vehicles/deleteVehicle.service";
import getOneVechileService from "../../services/vehicles/getOneVehicle.service";
import listVehiclesService from "../../services/vehicles/getVehicle.service";
import updateVehicleService from "../../services/vehicles/updateVehicle.service";

class VehicleController {
  static async create(req: Request, res: Response) {
    const { userId } = req.user;

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
      gallery_image2,
      gallery_image3,
      gallery_image4,
      gallery_image5,
      gallery_image6,
    } = req.body;

    const newVehicle = await createVehicleService(
      {
        title,
        type_of_ad,
        cover_image,
        description,
        gallery_image,
        gallery_image2,
        gallery_image3,
        gallery_image4,
        gallery_image5,
        gallery_image6,
        km,
        price,
        type_of_vehicle,
        year,
      },
      userId
    );

    return res.status(201).json(newVehicle);
  }

  static async index(req: Request, res: Response) {
    const vehicles = await listVehiclesService();

    return res.json(vehicles);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const vehicle = await getOneVechileService(id);

    return res.json(vehicle);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
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
      gallery_image2,
      gallery_image3,
      gallery_image4,
      gallery_image5,
      gallery_image6,
      published,
    } = req.body;

    const vehicleUpdate = await updateVehicleService(id, {
      title,
      type_of_ad,
      cover_image,
      description,
      gallery_image,
      gallery_image2,
      gallery_image3,
      gallery_image4,
      gallery_image5,
      gallery_image6,
      km,
      price,
      type_of_vehicle,
      year,
      published,
    });

    return res.json(vehicleUpdate);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteVehicleService(id);

    return res.status(204).json();
  }
}

export default VehicleController;
