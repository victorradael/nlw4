import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();

    await connection.close();
  });

  it("should be able to create a new Survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Types of research",
      description: "Types of research description",
    });

    expect(response.status).toBe(201);
  });
});
