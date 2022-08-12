import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { iUserID } from "../../interfaces/users";
import User from "../../models/User";

const deleteUserService = async ({ user_id }: iUserID) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: user_id } });

  if (!user) {
    throw new AppError("User not found.", 401);
  }

  await userRepository.delete(user.id);

  return true;
};

export default deleteUserService;
