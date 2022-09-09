import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import deleteVehicleService from "../../../services/vehicles/deleteVehicle.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to delete an ad ", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("DELETE - Must be delete one ad", async () => {
    const user = await createUserService(mockedUser1);
    const ad1 = await createVehicleService(mockedAd1, user.id);
    const deletedAd = await deleteVehicleService(ad1.id);

    expect(deletedAd).toBe(undefined);
  });
});
