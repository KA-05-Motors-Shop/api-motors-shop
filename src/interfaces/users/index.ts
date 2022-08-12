export interface IUserCreate {
  name: string;
  email: string;
  cpf: number;
  cel: number;
  birth_date: number;
  description: string;
  address: IAddressCreate;
  account_type: string;
  password: string;
}

export interface IAddressCreate {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IUserID {
  user_id: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cel?: number;
  birth_date?: number;
  description?: string;
  password?: string;
}
