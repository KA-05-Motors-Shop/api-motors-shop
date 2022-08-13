import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { VehicleUpdateProps } from "../../interfaces/vehicles";
import Vehicle from "../../models/Vehicle";

const updateVehilceService = async (id: string, data: VehicleUpdateProps) => {
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
