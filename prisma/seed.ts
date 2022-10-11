import { PrismaClient, Prisma } from "@prisma/client";
import logger from "../src/utils/logger";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    username: "admin",
    isActive: true,
    employee: {
      create: {
        empCode: "EMP0001",
        firstName: "Sokcheanith",
        lastName: "Ros",
        phoneNumber: "093256184",
        role: "admin",
        isResigned: false,
        location: "Phnom Penh",
      },
    },
  },
  {
    username: "user01",
    isActive: true,
    employee: {
      create: {
        empCode: "EMP0002",
        firstName: "Test1",
        lastName: "1",
        phoneNumber: "093256185",
        role: "Sale",
        isResigned: false,
        location: "Phnom Penh",
      },
    },
  },
  {
    username: "user02",
    isActive: true,
    employee: {
      create: {
        empCode: "EMP0003",
        firstName: "Test2",
        lastName: "2",
        phoneNumber: "093256186",
        role: "Audit",
        isResigned: false,
        location: "Phnom Penh",
      },
    },
  },
  {
    username: "user03",
    isActive: true,
    employee: {
      create: {
        empCode: "EMP0004",
        firstName: "Test3",
        lastName: "3",
        phoneNumber: "093256187",
        role: "Accounting",
        isResigned: false,
        location: "Phnom Penh",
      },
    },
  },
];

async function main() {
  logger.info("droping table ...");
  await prisma.employee.deleteMany({});
  await prisma.user.deleteMany({});
  logger.info("done droping table ...");
  logger.info("seeding data ...");
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    logger.info(`Created user with id: ${user.id}`);
  }
  logger.info(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
