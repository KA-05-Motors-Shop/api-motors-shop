import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import getOneVehicleService from "../../../services/vehicles/getOneVehicle.service";
import { mockedAd1, mockedAd2 } from "../../mocks/ads";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to list an ad ", () => {
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

  test("LIST ONE - Must be list one ad", async () => {
    const user = await createUserService(mockedUser1);
    const ad1 = await createVehicleService(mockedAd1, user.id);
    const ad2 = await createVehicleService(mockedAd2, user.id);

    const ad = await getOneVehicleService(ad2.id);

    expect(ad).toEqual(
      expect.objectContaining({
        ...ad2,
        owner: {
          id: user.id,
          name: user.name,
          description: user.description,
          cel: user.cel,
        },
        comments: [],
      })
    );
  });
});
