import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

export default class ListVehiclesService {
  async execute(): Promise<Vehicle[]> {
    const vehiclesRepository = AppDataSource.getRepository(Vehicle);
    const vehicles = await vehiclesRepository.find();

    return vehicles;
  }
}
