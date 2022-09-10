import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createCommentService from "../../../services/comments/createComment.service";
import getCommentsService from "../../../services/comments/getComments.service";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedComment1, mockedComment2 } from "../../mocks/comments";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to list all comments ", () => {
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

  test("GET - Must be list all comments", async () => {
    const user = await createUserService(mockedUser1);
    const ad = await createVehicleService(mockedAd1, user.id);
    const comment1 = await createCommentService(mockedComment1, user.id, ad.id);
    const comment2 = await createCommentService(mockedComment2, user.id, ad.id);
    const comments = await getCommentsService();

    expect(comments.length).toBe(2);
    expect(comments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: comment1.id,
          message: mockedComment1.message,
          created_at: comment1.created_at,
        }),
        expect.objectContaining({
          id: comment2.id,
          message: mockedComment2.message,
          created_at: comment2.created_at,
        }),
      ])
    );
  });
});
