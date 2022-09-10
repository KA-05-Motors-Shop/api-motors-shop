import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import createCommentService from "../../../services/comments/createComment.service";
import updateCommentService from "../../../services/comments/updateComment.service";
import createUserService from "../../../services/users/createUser.service";
import createVehicleService from "../../../services/vehicles/createVehicle.service";
import { mockedAd1 } from "../../mocks/ads";
import { mockedComment1, mockedComment2 } from "../../mocks/comments";
import { mockedUser1 } from "../../mocks/user";

describe("UNIT - Test to update one comment ", () => {
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

  test("UPDATE - Must be update one comment", async () => {
    const user = await createUserService(mockedUser1);
    const ad = await createVehicleService(mockedAd1, user.id);
    const comment1 = await createCommentService(mockedComment1, user.id, ad.id);
    const updatedComment = await updateCommentService(
      mockedComment2,
      comment1.id
    );

    expect(updatedComment).toHaveProperty("message");
    expect(updatedComment.message).toEqual("Comment updated");
  });
});
