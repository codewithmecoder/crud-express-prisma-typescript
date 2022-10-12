import supertest from "supertest";
import createServer from "../../utils/server";
import * as UserService from "../../services/user.service";
import { Prisma } from "@prisma/client";

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
      const createUserServiceMock = jest
        .spyOn(UserService, "getUsers")
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
});
