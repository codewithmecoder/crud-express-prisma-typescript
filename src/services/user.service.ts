import { PrismaClient, Prisma, User } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser(input: Prisma.UserCreateInput): Promise<User> {
  try {
    const user = await prisma.user.create({ data: input });
    return user;
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error("username already exsit!");
      }
    }
    throw new Error(error.message);
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const users = await prisma.user.findMany({ where: { isActive: true } });
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export async function getUserById(id: number): Promise<User | null> {
  try {
    const user = await prisma.user.findFirst({ where: { id } });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getUserByUsername(
  username: string
): Promise<User | null> {
  try {
    const user = await prisma.user.findFirst({ where: { username } });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
