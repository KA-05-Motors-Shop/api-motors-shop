import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedLoginUser1, mockedUser1 } from "../../mocks/user";
import { mockedAd1, mockedAdFailed } from "../../mocks/ads";

describe("Test to create an ad ", () => {
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

  test("POST - Must be able to create an ad", async () => {
    const res = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: res.body.id,
        ...mockedAd1,
        owner: {
          id: res.body.owner.id,
          name: mockedUser1.name,
        },
      })
    );
  });

  test("ERROR - Not able to create an ad with the same title", async () => {
    await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app)
      .post("/vehicles")
      .send(mockedAdFailed)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("This title already exists");
  });

  test("ERROR - Not able to create an ad without a token", async () => {
    const res = await request(app).post("/vehicles").send(mockedAd1);

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Token is missing");
  });

  test("ERROR - Not able to create an ad with an invalid token", async () => {
    const res = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: token });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid token");
  });
});
