import { IAddressCreate } from "../../../interfaces/addresses";

export const mockedAddress: IAddressCreate = {
  cep: "99999999",
  city: "Cidade Teste",
  number: "159",
  state: "Estado Teste",
  street: "Rua teste",
};

export const mockedAddress2: IAddressCreate = {
  cep: "99999998",
  city: "Cidade Teste 2",
  number: "158",
  state: "Estado Teste 2",
  street: "Rua teste 2",
};

export const mockedAddressFailed: IAddressCreate = {
  cep: "99999999",
  city: "Cidade Teste",
  number: "159",
  state: "Estado Teste",
  street: "Rua teste",
};
