interface UserProps {
  name: string;
  email: string;
  cpf: number;
  cel: number;
  birth_date: number;
  description: string;
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  account_type: string;
  password: string;
  confirm_password: string;
}

const createUserService = async (data: UserProps) => {};

export default createUserService;
