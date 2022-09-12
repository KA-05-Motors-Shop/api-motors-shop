import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedAd1, mockedAd2 } from "../../mocks/ads";
import {
  mockedLoginUser1,
  mockedLoginUser2,
  mockedUser1,
  mockedUser2,
} from "../../mocks/user";

describe("Test to list all ads ", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/users").send(mockedUser1);
    await request(app).post("/users").send(mockedUser2);
    const login = await request(app).post("/login").send(mockedLoginUser1);
    const login2 = await request(app).post("/login").send(mockedLoginUser2);

    await request(app)
      .post("/vehicles")
      .send(mockedAd1)
      .set({ Authorization: `Bearer ${login.body.token}` });

    await request(app)
      .post("/vehicles")
      .send(mockedAd2)
      .set({ Authorization: `Bearer ${login2.body.token}` });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("GET - Must be able to list all ads", async () => {
    const res = await request(app).get("/vehicles");

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: res.body[0].id,
          ...mockedAd1,
          comments: [],
          owner: {
            id: res.body[0].owner.id,
            name: mockedUser1.name,
            description: mockedUser1.description,
            cel: mockedUser1.cel,
          },
        }),
        expect.objectContaining({
          id: res.body[1].id,
          ...mockedAd2,
          comments: [],
          owner: {
            id: res.body[1].owner.id,
            name: mockedUser2.name,
            description: mockedUser2.description,
            cel: mockedUser2.cel,
          },
        }),
      ])
    );
  });
});
