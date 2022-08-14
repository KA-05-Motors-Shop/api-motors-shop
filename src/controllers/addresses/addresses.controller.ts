import { Request, Response } from "express";
import updateAddressService from "../../services/addresses/updateAddress.service";

class AddressController {
  static async update(req: Request, res: Response) {
    const { user_id } = req.params;
    const { cep, state, city, street, number, complement } = req.body;

    const userAddressUpdated = await updateAddressService(user_id, {
      cep,
      state,
      city,
      street,
      number,
      complement,
    });

    return res.status(200).json(userAddressUpdated);
  }
}

export default AddressController;
