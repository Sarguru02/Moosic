import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
// this is not good, we should introduce a singleton here
