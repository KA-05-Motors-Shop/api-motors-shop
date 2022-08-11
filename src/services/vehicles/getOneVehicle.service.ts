import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Vehicle from "../../models/Vehicle";

const getOneVechileService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne({ where: { id } });

  if (!vehicle) throw new AppError("Vehicle not found", 404);

  return vehicle
};

export default getOneVechileService
