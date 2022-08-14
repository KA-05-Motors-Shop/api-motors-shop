import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { IUserID } from "../../interfaces/users";
import User from "../../models/User";
import { formatedUserResponse } from "../../utils/formatedUserResponse";

const showUserService = async ({ user_id }: IUserID) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: user_id } });

  if (!user) throw new AppError("User not found.", 401);

  return formatedUserResponse({ user });
};

export default showUserService;
