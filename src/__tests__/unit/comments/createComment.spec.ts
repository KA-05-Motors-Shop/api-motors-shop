import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createCommentService from "../../../services/comments/createComment.service";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedComment1 } from "../../mocks/comments";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to create an comment ", () => {
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

  test("CREATE - Must be create an comment", async () => {
    const user = await createUserService(mockedUser1);
    const ad = await createVehicleService(mockedAd1, user.id);
    const comment = await createCommentService(mockedComment1, user.id, ad.id);

    expect(comment).toEqual(
      expect.objectContaining({
        id: comment.id,
        message: mockedComment1.message,
        created_at: comment.created_at,
        owner: { id: user.id, name: user.name },
      })
    );
  });
});
