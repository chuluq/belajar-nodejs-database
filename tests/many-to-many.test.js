import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should insert many to many relation', async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: 'chuluq',
        product_id: 'P0001',
      },
      include: {
        customer: true,
        product: true,
      },
    });
    console.info(like);
  });

  it('should find one with many to many relation', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'chuluq',
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.info(customer);
  });

  it('should find many with many to many relation', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: 'A',
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.info(customers);
  });

  it('should love existing products', async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: 'chuluq',
      },
      data: {
        loves: {
          connect: [
            {
              id: 'P0001',
            }, {
              id: 'P0002',
            },
          ],
        },
      },
      include: {
        loves: true,
      },
    });
    console.info(customer);
  });

  it('should find many implicit relation', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: 'A',
            }
          }
        }
      },
      include: {
        loves: true,
      },
    });
    console.info(customers);
  });
});