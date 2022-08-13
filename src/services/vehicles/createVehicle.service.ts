import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import User from "../../models/User";
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
  gallery_image2?: string;
  gallery_image3?: string;
  gallery_image4?: string;
  gallery_image5?: string;
  gallery_image6?: string;
}

const createVehicleService = async (data: VehicleProps, owner: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: owner } });

  if (!user) throw new AppError("User not found", 404);

  const ad = await vehicleRepository.find();

  const vehicle = ad.find(({ title }) => title === data.title);

  if (vehicle) throw new AppError("This title already exists", 409);

  const newVehicle = new Vehicle();
  newVehicle.title = data.title;
  newVehicle.type_of_ad = data.type_of_ad;
  newVehicle.year = data.year;
  newVehicle.km = data.km;
  newVehicle.price = data.price;
  newVehicle.description = data.description;
  newVehicle.type_of_vehicle = data.type_of_vehicle;
  newVehicle.cover_image = data.cover_image;
  newVehicle.gallery_image = data.gallery_image;
  newVehicle.gallery_image2 = data.gallery_image2!;
  newVehicle.gallery_image3 = data.gallery_image3!;
  newVehicle.gallery_image4 = data.gallery_image4!;
  newVehicle.gallery_image5 = data.gallery_image5!;
  newVehicle.gallery_image6 = data.gallery_image6!;
  newVehicle.user = user;

  await vehicleRepository.save(newVehicle);

  return newVehicle;
};

export default createVehicleService;
