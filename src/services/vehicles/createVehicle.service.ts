import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { VehicleProps } from "../../interfaces/vehicles";
import User from "../../models/User";
import Vehicle from "../../models/Vehicle";
import { formatedResponse } from "../../utils/formatedResponse";

const createVehicleService = async (data: VehicleProps, owner: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: owner } });

  if (!user) throw new AppError("User not found", 404);

  const ad = await vehicleRepository.find();

  const vehicleAlreadExists = ad.find(({ title }) => title === data.title);

  if (vehicleAlreadExists) throw new AppError("This title already exists", 409);

  const vehicle = new Vehicle();
  vehicle.title = data.title;
  vehicle.type_of_ad = data.type_of_ad;
  vehicle.year = data.year;
  vehicle.km = data.km;
  vehicle.price = data.price;
  vehicle.description = data.description;
  vehicle.type_of_vehicle = data.type_of_vehicle;
  vehicle.cover_image = data.cover_image;
  vehicle.gallery_image = data.gallery_image;
  vehicle.gallery_image2 = data.gallery_image2!;
  vehicle.gallery_image3 = data.gallery_image3!;
  vehicle.gallery_image4 = data.gallery_image4!;
  vehicle.gallery_image5 = data.gallery_image5!;
  vehicle.gallery_image6 = data.gallery_image6!;
  vehicle.user = user;

  await vehicleRepository.save(vehicle);

  return formatedResponse({ vehicle });
};

export default createVehicleService;
