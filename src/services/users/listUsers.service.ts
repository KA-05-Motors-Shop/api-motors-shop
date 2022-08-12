import { AppDataSource } from "../../data-source";
import User from "../../models/User";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const listUsers = await userRepository.find();

  return listUsers;
};

export default listUsersService;
