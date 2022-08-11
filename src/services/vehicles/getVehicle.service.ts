import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

const listVehiclesService = async () => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const vehicles = await vehiclesRepository.find();

  const availableVehicles = vehicles.filter(({ published }) => published);

  return availableVehicles;
};

export default listVehiclesService;
