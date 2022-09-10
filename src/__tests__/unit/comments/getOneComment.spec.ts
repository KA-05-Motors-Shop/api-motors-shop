import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createCommentService from "../../../services/comments/createComment.service";
import getOneCommentService from "../../../services/comments/getComment.service";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedComment1, mockedComment2 } from "../../mocks/comments";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to list one comment ", () => {
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

  test("GET - Must be list one comment", async () => {
    const user = await createUserService(mockedUser1);
    const ad = await createVehicleService(mockedAd1, user.id);
    const comment1 = await createCommentService(mockedComment1, user.id, ad.id);
    await createCommentService(mockedComment2, user.id, ad.id);
    const comment = await getOneCommentService(comment1.id);

    expect(comment).toEqual(
      expect.objectContaining({
        id: comment1.id,
        message: mockedComment1.message,
        created_at: comment1.created_at,
      })
    );
  });
});
