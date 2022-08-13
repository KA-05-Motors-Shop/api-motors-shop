import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { IAddressUpdate } from "../../interfaces/addresses";
import Address from "../../models/Address";
import User from "../../models/User";

const updateAddressService = async (id: string, data: IAddressUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError("User not found.", 404);

  const address = await addressRepository.findOne({
    where: { id: user.address.id },
  });

  if (!address) throw new AppError("Address not found.", 404);

  const addressUpdated = await addressRepository.save({
    ...data,
    id: address.id,
  });

  return addressUpdated;
};

export default updateAddressService;
