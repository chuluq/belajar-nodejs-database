import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should be able to auto increment primary key',async () => {
    const category = await prismaClient.category.create({
      data: {
        name: 'Food'
      }
    })
    console.log(category);
    expect(category).toHaveProperty("id")
  });
});