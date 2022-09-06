import { IUserCreate } from "../../../interfaces/users";
import { mockedAddress, mockedAddress2, mockedAddressFailed } from "../address";

export const mockedUser1: IUserCreate = {
  name: "Alexandre",
  email: "ale@gmail.com",
  cpf: "12345678910",
  password: "1234",
  description: "Usuario para teste",
  account_type: "Vendedor",
  address: mockedAddress,
  birth_date: "13/06/2001",
  cel: "11 999999999",
};

export const mockedUser2: IUserCreate = {
  name: "Luiz",
  email: "luiz@gmail.com",
  cpf: "12345678911",
  password: "1234",
  description: "Usuario para teste 2 ",
  account_type: "Comprador",
  address: mockedAddress2,
  birth_date: "13/06/2001",
  cel: "11 999999998",
};

export const mockedUserEmailFailed: IUserCreate = {
  name: "Alexandre",
  email: "ale@gmail.com",
  cpf: "12345678919",
  password: "1234",
  description: "Usuario para teste",
  account_type: "Vendedor",
  address: mockedAddressFailed,
  birth_date: "13/06/2001",
  cel: "11 999999999",
};

export const mockedUserCPFFailed: IUserCreate = {
  name: "Luiz",
  email: "luizinho@gmail.com",
  cpf: "12345678910",
  password: "1234",
  description: "Usuario para teste",
  account_type: "Vendedor",
  address: mockedAddressFailed,
  birth_date: "13/06/2001",
  cel: "11 999999993",
};

export const mockedUserCellFailed: IUserCreate = {
  name: "Alexandre",
  email: "alexandre@gmail.com",
  cpf: "12345678913",
  password: "1234",
  description: "Usuario para teste",
  account_type: "Vendedor",
  address: mockedAddressFailed,
  birth_date: "13/06/2001",
  cel: "11 999999999",
};

export const mockedUserAddressFailed: IUserCreate = {
  name: "Luiz",
  email: "luizantonio@gmail.com",
  cpf: "12345678917",
  password: "1234",
  description: "Usuario para teste",
  account_type: "Vendedor",
  address: mockedAddressFailed,
  birth_date: "13/06/2001",
  cel: "11 999999978",
};

export const mockedLoginUser1 = {
  email: "ale@gmail.com",
  password: "1234",
};

export const mockedLoginUser2 = {
  email: "luiz@gmail.com",
  password: "1234",
};
