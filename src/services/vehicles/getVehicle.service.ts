import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";
import { formatedResponse } from "../../utils/formatedResponse";

const listVehiclesService = async () => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);

  const vehicles = await vehiclesRepository
    .createQueryBuilder("vehicles")
    .leftJoinAndSelect("vehicles.user", "users")
    .where("vehicles.userId = users.id")
    .getMany();

  const availableVehicles = vehicles.filter(({ published }) => published);

  const formatedVechiles = availableVehicles.map((vehicle) =>
    formatedResponse({ vehicle })
  );

  return formatedVechiles;
};

export default listVehiclesService;
