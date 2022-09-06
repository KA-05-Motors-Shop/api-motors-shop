import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedLoginUser1,
  mockedLoginUser2,
  mockedUser1,
  mockedUser2,
} from "../../mocks/user";
import { mockedAd1, mockedAd2, mockedAdUpdated } from "../../mocks/ads";

describe("Test to delete one ad ", () => {
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

    await request(app).post("/users").send(mockedUser2);
    const login = await request(app).post("/login").send(mockedLoginUser2);

    token = login.body.token;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("DELETE - Must be able to delete an ad", async () => {
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd2)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app)
      .delete(`/vehicles/${ad.body.id}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(204);
  });

  test("ERROR - Not able to delete an ad with invalid uuid", async () => {
    const res = await request(app)
      .delete(`/vehicles/1`)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(422);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("This id is not valid");
  });

  test("ERROR - Not able to delete a non-existent ad", async () => {
    const res = await request(app)
      .delete(`/vehicles/c6e5958c-f8b5-4a3a-8a4a-908089a3c8b2`)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Vehicle not found");
  });

  test("ERROR - Unable to delete an ad that you do not owner", async () => {
    await request(app).post("/users").send(mockedUser1);
    const login = await request(app).post("/login").send(mockedLoginUser1);
    const ad = await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${token}` });

    const res = await request(app)
      .delete(`/vehicles/${ad.body.id}`)
      .set({ Authorization: `Bearer ${login.body.token}` });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Access denied");
  });
});
