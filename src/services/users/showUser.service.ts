import { AppDataSource } from "../../data-source";
import User from "../../models/User";

interface iUserID {
  user_id: string;
}

const showUserService = async ({ user_id }: iUserID) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: user_id } });

  return user;
};

export default showUserService;
