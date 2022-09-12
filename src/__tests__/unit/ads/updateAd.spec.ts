import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import updateVehicleService from "../../../services/vehicles/updateVehicle.service";
import { mockedAd1, mockedAdUpdated } from "../../mocks/ads";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to update an ad ", () => {
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

  test("UPDATED - Must be update one ad", async () => {
    const user = await createUserService(mockedUser1);
    const ad1 = await createVehicleService(mockedAd1, user.id);
    const updatedAd = await updateVehicleService(ad1.id, mockedAdUpdated);

    expect(updatedAd).toEqual(
      expect.objectContaining({ message: "Updated ad" })
    );
  });
});
