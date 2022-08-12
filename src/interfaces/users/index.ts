export interface UserProps {
  name: string;
  email: string;
  cpf: number;
  cel: number;
  birth_date: number;
  description: string;
  address: AddressProps;
  account_type: string;
  password: string;
}

export interface AddressProps {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface iUserID {
  user_id: string;
}
