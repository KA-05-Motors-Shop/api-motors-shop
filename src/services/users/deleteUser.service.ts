import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { IUserID } from "../../interfaces/users";
import User from "../../models/User";

const deleteUserService = async ({ user_id }: IUserID) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: user_id } });

  if (!user) throw new AppError("User not found.", 404);

  await userRepository.delete(user.id);

  return true;
};

export default deleteUserService;
