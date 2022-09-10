import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedLoginUser1, mockedUser1 } from "../../mocks/user";
import { mockedAd1 } from "../../mocks/ads";
import { mockedComment1, mockedComment2 } from "../../mocks/comments";

describe("Test to list all comments ", () => {
  let connection: DataSource;
  let token: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
    await request(app).post("/users").send(mockedUser1);
    const login = await request(app).post("/login").send(mockedLoginUser1);

    token = login.body.token;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("GET - Must be list one comment", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment1)
      .set({ Authorization: `Bearer ${token}` });

    const comment2 = await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment2)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app).get(`/comments/${comment2.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: res.body.id,
        message: mockedComment2.message,
        created_at: res.body.created_at,
      })
    );
  });

  test("ERROR - Not be able to get comment with vehicle id nonexists", async () => {
    const res = await request(app).get(
      `/comments/9cc6c9a1-472c-4f73-9d05-0c16a217ff05`
    );

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Comment not found");
  });

  test("ERROR - Not able to get comment with invalid uuid", async () => {
    const res = await request(app).get(`/comments/1`);

    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("This id is not valid");
  });
});
