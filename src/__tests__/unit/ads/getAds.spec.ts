import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import listVehicleService from "../../../services/vehicles/getVehicle.service";
import { mockedAd1, mockedAd2 } from "../../mocks/ads";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to list all ads ", () => {
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

  test("LIST - Must be list all ads", async () => {
    const user = await createUserService(mockedUser1);
    const ad1 = await createVehicleService(mockedAd1, user.id);
    const ad2 = await createVehicleService(mockedAd2, user.id);

    const ads = await listVehicleService();

    expect(ads.length).toBe(2);
    expect(ads).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...ad1,
          owner: {
            id: user.id,
            name: user.name,
            description: user.description,
            cel: user.cel,
          },
          comments: [],
        }),
        expect.objectContaining({
          ...ad2,
          owner: {
            id: user.id,
            name: user.name,
            description: user.description,
            cel: user.cel,
          },
          comments: [],
        }),
      ])
    );
  });
});
