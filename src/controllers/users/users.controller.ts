import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import listUsersService from "../../services/users/listUsers.service";

class UserController {
  static async create(req: Request, res: Response) {
    const {
      name,
      email,
      cpf,
      cel,
      birth_date,
      description,
      address,
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
      address,
      account_type,
      password,
    });

    return res.status(201).json(instanceToPlain(newUser));
  }

  static async index(req: Request, res: Response) {
    const listUsers = await listUsersService();

    return res.status(200).json(instanceToPlain(listUsers));
  }
}

export default UserController;
