import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import createUserService from "../../../services/users/createUser.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to create an ad ", () => {
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

  test("CREATE - Must be create an ad", async () => {
    const user = await createUserService(mockedUser1);
    const newAd = await createVehicleService(mockedAd1, user.id);

    expect(newAd).toEqual(
      expect.objectContaining({
        id: newAd.id,
        title: mockedAd1.title,
        type_of_ad: mockedAd1.type_of_ad,
        type_of_vehicle: mockedAd1.type_of_vehicle,
        year: mockedAd1.year,
        km: mockedAd1.km,
        price: mockedAd1.price,
        description: mockedAd1.description,
        cover_image: mockedAd1.cover_image,
        gallery_image: mockedAd1.gallery_image,
        gallery_image2: newAd.gallery_image2,
        gallery_image3: newAd.gallery_image3,
        gallery_image4: newAd.gallery_image4,
        gallery_image5: newAd.gallery_image5,
        gallery_image6: newAd.gallery_image6,
        published: newAd.published,
        owner: {
          id: user.id,
          name: user.name,
        },
      })
    );
  });
});
