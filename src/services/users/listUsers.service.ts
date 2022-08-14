import { AppDataSource } from "../../data-source";
import User from "../../models/User";
import { formatedUserResponse } from "../../utils/formatedUserResponse";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const listUsers = await userRepository.find();

  return listUsers.map((user) => formatedUserResponse({ user }));
};

export default listUsersService;
