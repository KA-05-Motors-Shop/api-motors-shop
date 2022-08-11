import { Request, Response } from "express";
import createVehicleService from "../../services/vehicles/createVehicle.service";

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
      gallery_image2,
      gallery_image3,
      gallery_image4,
      gallery_image5,
      gallery_image6,
    } = req.body;

    const newVehicle = await createVehicleService({
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
    });

    return res.status(201).json(newVehicle);
  }
}

export default VehicleController;
