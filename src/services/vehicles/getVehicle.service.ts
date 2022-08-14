import { AppDataSource } from "../../data-source";
import Comment from "../../models/Comment";
import Vehicle from "../../models/Vehicle";
import { formatedResponse } from "../../utils/formatedResponse";

const listVehiclesService = async () => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const commentsRepository = AppDataSource.getRepository(Comment);

  const comments = await commentsRepository.find({
    relations: ["user", "vehicle"],
  });

  const vehicles = await vehiclesRepository.find({
    relations: ["user", "comments"],
  });

  const availableVehicles = vehicles.filter(({ published }) => published);

  const formatedVechiles = availableVehicles.map((vehicle) =>
    formatedResponse({ vehicle, comments })
  );

  return formatedVechiles;
};

export default listVehiclesService;
