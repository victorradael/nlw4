import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.createQueryRunner().clearDatabase("users");
    await connection.createQueryRunner().clearDatabase("surveys");
    await connection.runMigrations();
  });

  it("should be able to create a new Survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Types of research",
      description: "Types of research description",
    });

    expect(response.status).toBe(201);
  });
});
