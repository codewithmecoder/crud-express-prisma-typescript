import supertest from "supertest";
import createServer from "../../utils/server";
import * as UserService from "../../services/user.service";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = createServer();

const userPayload = {
  id: 1,
  username: "test1",
  isActive: true,
  createdAt: "2022-10-12T07:52:22.471Z",
  updatedAt: "2022-10-12T07:52:22.471Z",
};

const userInput: Prisma.UserCreateInput = {
  username: "test1",
  createdAt: "2022-10-12T07:52:22.471Z",
  updatedAt: "2022-10-12T07:52:22.471Z",
  isActive: true,
};

describe("user", () => {
  beforeAll(async () => {
    // create product categories
    await prisma.user.create({ data: userInput });

    console.log("✨ user successfully created!");
  });

  afterAll(async () => {
    const deleteUsers = prisma.user.deleteMany();

    await prisma.$transaction([deleteUsers]);

    await prisma.$disconnect();
  });
  describe("create user", () => {
    it("should return the user payload", async () => {
      const createUserServiceMock = jest
        .spyOn(UserService, "createUser")
        // @ts-ignore
        .mockReturnValueOnce(userPayload);

      const { statusCode, body } = await supertest(app)
        .post("/api/users/")
        .send(userInput);

      expect(statusCode).toBe(201);
      expect(body).toEqual(userPayload);

      expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
    });
  });
  describe("get users", () => {
    it("should return all the users", async () => {
      const { statusCode, body } = await supertest(app).get(
        "/api/users/getUsers"
      );
      expect(statusCode).toBe(200);
      expect(body.length).toEqual(1);
    });
  });

  describe("get user by id", () => {
    it("should return not found 404", async () => {
      const { statusCode } = await supertest(app).get("/api/users/0");
      expect(statusCode).toBe(404);
    });

    it("should return not found 400", async () => {
      const { statusCode, body } = await supertest(app).get("/api/users/c");
      expect(statusCode).toBe(400);
      expect(body).toEqual({ error: true, message: "id is not valid" });
    });
  });

  describe("get user by username", () => {
    it("should return user payload with 200 status", async () => {
      const { statusCode } = await supertest(app).get(
        "/api/users/test1/byusername"
      );
      expect(statusCode).toBe(200);
    });
    it("should return not found 404", async () => {
      const { statusCode } = await supertest(app).get(
        "/api/users/test01/byusername"
      );
      expect(statusCode).toBe(404);
    });
  });
});
