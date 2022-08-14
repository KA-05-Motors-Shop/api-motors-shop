import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { CreateComment } from "../../interfaces/comments";
import Comment from "../../models/Comment";
import User from "../../models/User";
import Vehicle from "../../models/Vehicle";
import { formatedCommentResponse } from "../../utils/formatedCommentResponse";

const createCommentService = async (
  data: CreateComment,
  owner: string,
  vehicle_id: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: owner } });

  if (!user) throw new AppError("User not found", 404);

  const vehicle = await vehiclesRepository.findOne({
    where: { id: vehicle_id },
  });

  if (!vehicle) throw new AppError("Vehicle not found", 404);

  const comment = new Comment();
  comment.message = data.message;
  comment.user = user;
  comment.vehicle = vehicle;

  commentRepository.create(comment);

  await commentRepository.save(comment);

  return formatedCommentResponse({ comment });
};

export default createCommentService;
