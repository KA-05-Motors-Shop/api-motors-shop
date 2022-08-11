import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Vehicle from "../../models/Vehicle";

interface VehicleProps {
  title?: string;
  type_of_ad?: string;
  year?: number;
  km?: number;
  price?: number;
  description?: string;
  type_of_vehicle?: string;
  cover_image?: string;
  gallery_image?: string;
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
  published?: boolean;
}

const updateVehilceService = async (id: string, data: VehicleProps) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const ad = await vehicleRepository.findOne({ where: { id } });

  if (!ad) throw new AppError("Vehicle not found", 404);

  await vehicleRepository.save({
    ...data,
    id,
  });

  return { message: "Updated ad" };
};

export default updateVehilceService;
