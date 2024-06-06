import { PrismaClient } from "@prisma/client";
import { Person } from "@/utils/common/person";

const prisma = new PrismaClient();

export const getPersonFromDB = async (person: Person) => {
  return prisma.user.findFirst({
    where: {
      name: person,
    },
  });
};

