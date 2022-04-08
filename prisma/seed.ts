import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const main = async () => {
  const feedback = await prisma.feedback.findMany();
};
