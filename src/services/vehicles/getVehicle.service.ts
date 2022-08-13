import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

const listVehiclesService = async () => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const vehicles = await vehiclesRepository
    .createQueryBuilder("vehicles")
    .leftJoinAndSelect("vehicles.user", "users")
    .where("vehicles.userId = users.id")
    .getMany();

  const availableVehicles = vehicles.filter(({ published }) => published);

  return availableVehicles;
};

export default listVehiclesService;
