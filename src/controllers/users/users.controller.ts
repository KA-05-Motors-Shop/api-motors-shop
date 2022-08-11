import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

class UserController {
  static async create(req: Request, res: Response) {
    const {
      name,
      email,
      cpf,
      cel,
      birth_date,
      description,
      cep,
      state,
      city,
      street,
      number,
      complement,
      account_type,
      password,
    } = req.body;

    const newUser = await createUserService({
      name,
      email,
      cpf,
      cel,
      birth_date,
      description,
      cep,
      state,
      city,
      street,
      number,
      complement,
      account_type,
      password,
    });

    return res.status(201).json(newUser);
  }
}

export default UserController;
