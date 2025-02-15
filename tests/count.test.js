import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should count records',async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: 'Chuluq'
      }
    })

    expect(total).toBe(3)
  });
});