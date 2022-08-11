import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { UserProps } from "../../interfaces/users";
import User from "../../models/User";

const createUserService = async (data: UserProps): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const checkUserExists = await userRepository.findOne({
    where: { cpf: data.cpf },
  });

  if (checkUserExists) {
    throw new AppError("User already exists.", 401);
  }

  const hashedPassword = await hash(data.password, 8);

  const newUser = new User();
  newUser.name = data.name;
  newUser.email = data.email;
  newUser.cpf = data.cpf;
  newUser.cel = data.cel;
  newUser.birth_date = data.birth_date;
  newUser.description = data.description;
  newUser.cep = data.cep;
  newUser.state = data.state;
  newUser.city = data.city;
  newUser.street = data.street;
  newUser.number = data.number;
  newUser.complement = data.complement;
  newUser.account_type = data.account_type;
  newUser.password = hashedPassword;

  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
