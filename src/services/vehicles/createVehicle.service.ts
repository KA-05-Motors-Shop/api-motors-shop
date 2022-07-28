import { AppDataSource } from "../../data-source";
import Vehicle from "../../models/Vehicle";

interface VehicleProps {
  title: string;
  type_of_ad: string;
  year: number;
  km: number;
  price: number;
  description: string;
  type_of_vehicle: string;
  cover_image: string;
  gallery_image: string;
}

const createVehicleService = async (data: VehicleProps) => {
    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const newVehicle = new Vehicle()
    newVehicle.title = data.title
    newVehicle.type_of_ad = data.type_of_ad
    newVehicle.year = data.year
    newVehicle.km = data.km
    newVehicle.price = data.price
    newVehicle.description = data.description
    newVehicle.type_of_vehicle = data.type_of_vehicle
    newVehicle.cover_image = data.cover_image
    newVehicle.gallery_image = data.gallery_image

    vehicleRepository.create(newVehicle)

    await vehicleRepository.save(newVehicle)

    return newVehicle
};

export default createVehicleService