import {prismaClient} from '../src/prisma-client.js';

describe('PrismaClient', () => {
  it('Should connect to database', async () => {
    await prismaClient.$connect();

    //   do something

    await prismaClient.$disconnect();
  });
});