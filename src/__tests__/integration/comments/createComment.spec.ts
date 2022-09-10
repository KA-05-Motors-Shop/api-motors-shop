import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedLoginUser1, mockedUser1 } from "../../mocks/user";
import { mockedAd1, mockedAd2 } from "../../mocks/ads";
import { mockedComment1 } from "../../mocks/comments";

describe("Test to create an comment ", () => {
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

  test("POST - Must be create an comment", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment1)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: res.body.id,
        message: mockedComment1.message,
        created_at: res.body.created_at,
        owner: { id: res.body.owner.id, name: mockedUser1.name },
      })
    );
  });

  test("ERROR - Not be able to create comment without the token", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd2)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app)
      .post(`/comments/${ad.body.id}`)
      .send(mockedComment1);

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Token is missing");
  });

  test("ERROR - Not be able to create comment with vehicle id nonexists", async () => {
    const res = await request(app)
      .post(`/comments/9cc6c9a1-472c-4f73-9d05-0c16a217ff05`)
      .send(mockedComment1)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Vehicle not found");
  });
});
