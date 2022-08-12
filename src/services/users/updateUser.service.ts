import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";
import User from "../../models/User";

const updateUserService = async (id: string, data: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError("User not found.", 401);

  const checkEmailExists = await userRepository.findOne({
    where: { email: data.email },
  });

  if (checkEmailExists && checkEmailExists.id != user.id)
    throw new AppError("E-mail already in use.", 401);

  const userUpdated = await userRepository.save({
    ...data,
    id,
  });

  return userUpdated;
};

export default updateUserService;
