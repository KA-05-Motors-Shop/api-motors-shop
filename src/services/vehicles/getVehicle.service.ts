import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

export default class ListCarsService {
  async execute(): Promise<Vehicle[]> {
    const carsRepository = AppDataSource.getRepository(Vehicle);
    const cars = await carsRepository.find();

    return cars;
  }
}
