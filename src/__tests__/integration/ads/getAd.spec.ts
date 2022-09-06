import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedAd1 } from "../../mocks/ads";
import { mockedLoginUser1, mockedUser1 } from "../../mocks/user";

describe("Test to list one ad ", () => {
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

  test("GET - Must be able to list all ads", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app).get(`/vehicles/${ad.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: res.body.id,
        ...mockedAd1,
        comments: [],
        owner: {
          id: res.body.owner.id,
          name: mockedUser1.name,
          description: mockedUser1.description,
          cel: mockedUser1.cel,
        },
      })
    );
  });

  test("ERROR - Not able to list an ad with invalid uuid", async () => {
    const res = await request(app).get(`/vehicles/1`);

    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("This id is not valid");
  });

  test("ERROR - Not able to list a non-existent ad", async () => {
    const res = await request(app).get(
      `/vehicles/c6e5958c-f8b5-4a3a-8a4a-908089a3c8b2`
    );

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Vehicle not found");
  });
});
