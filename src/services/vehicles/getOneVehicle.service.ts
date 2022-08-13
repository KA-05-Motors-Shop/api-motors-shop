import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Vehicle from "../../models/Vehicle";
import { formatedResponse } from "../../utils/formatedResponse";

const getOneVechileService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository
    .createQueryBuilder("vehicles")
    .leftJoinAndSelect("vehicles.user", "users")
    .where("vehicles.userId = users.id")
    .andWhere("vehicles.id = :id", { id: id })
    .getOne();

  if (!vehicle) throw new AppError("Vehicle not found", 404);

  return formatedResponse({ vehicle });
};

export default getOneVechileService;
