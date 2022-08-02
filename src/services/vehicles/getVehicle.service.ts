import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

const listVehiclesService = async  () : Promise<Vehicle[]> => {
  
    const vehiclesRepository = AppDataSource.getRepository(Vehicle);
    const vehicles = await vehiclesRepository.find();

    return vehicles

}

export default listVehiclesService