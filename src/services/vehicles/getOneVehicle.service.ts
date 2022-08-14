import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Comment from "../../models/Comment";
import Vehicle from "../../models/Vehicle";
import { formatedResponse } from "../../utils/formatedResponse";

const getOneVechileService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const commentsRepository = AppDataSource.getRepository(Comment);

  const comments = await commentsRepository.find({
    relations: ["user", "vehicle"],
  });

  const vehicle = await vehicleRepository.findOne({
    where: { id },
    relations: ["user", "comments"],
  });

  if (!vehicle) throw new AppError("Vehicle not found", 404);

  return formatedResponse({ vehicle, comments });
};

export default getOneVechileService;
