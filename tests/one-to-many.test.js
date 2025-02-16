import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should insert and include', async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: 'chuluq',
        title: 'Insert comment',
        description: 'Description',
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it('should insert to many relation', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'alex',
        name: 'Alex',
        email: 'alex@alex.com',
        phone: '020202020',
        comments: {
          createMany: {
            data: [
              {
                title: 'Comment 1',
                description: 'Description 1',
              }, {
                title: 'Comment 2',
                description: 'Description 2',
              }, {
                title: 'Comment 3',
                description: 'Description 3',
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it('should find many with relation', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: 'Comment'
            }
          }
        },
      },
      include: {
        comments: true,
      }
    });
    console.info(customers);
  });
});