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

  test("GET - Must be list all comments", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    const comment1 = await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment1)
      .set({ Authorization: `Bearer ${token}` });

    const comment2 = await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment2)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app).get("/comments");

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: comment1.body.id,
          message: mockedComment1.message,
          created_at: comment1.body.created_at,
        }),
        expect.objectContaining({
          id: comment2.body.id,
          message: mockedComment2.message,
          created_at: comment2.body.created_at,
        }),
      ])
    );
  });
});
