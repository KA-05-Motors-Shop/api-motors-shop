import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { UserProps } from "../../interfaces/users";
import Address from "../../models/Addresses";
import User from "../../models/User";

const createUserService = async (data: UserProps) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const checkUserExists = await userRepository.findOne({
    where: { cpf: data.cpf },
  });

  if (checkUserExists) {
    throw new AppError("User already exists.", 401);
  }

  const hashedPassword = await hash(data.password, 8);

  const newAddress = new Address();
  newAddress.cep = data.address.cep;
  newAddress.state = data.address.state;
  newAddress.city = data.address.city;
  newAddress.street = data.address.street;
  newAddress.number = data.address.number;
  newAddress.complement = data.address.complement;

  addressRepository.create(newAddress);

  await addressRepository.save(newAddress);

  const new_user_address = await addressRepository.findOne({
    where: { cep: newAddress.cep },
  });

  if (!new_user_address) {
    throw new AppError("Address not found.", 404);
  }

  const newUser = new User();
  newUser.name = data.name;
  newUser.email = data.email;
  newUser.cpf = data.cpf;
  newUser.cel = data.cel;
  newUser.birth_date = data.birth_date;
  newUser.description = data.description;
  newUser.account_type = data.account_type;
  newUser.password = hashedPassword;
  newUser.address = new_user_address;

  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
