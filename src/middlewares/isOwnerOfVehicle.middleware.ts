import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError";
import User from "../models/User";

const IsOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.user;
  const { id } = req.params;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) throw new AppError("Vehicle not found");

  const vehicle = user.vehicles.find((ad) => ad.id === id);

  if (!vehicle) throw new AppError("Access denied", 401);

  return next();
};

export default IsOwner;
