import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should create one to one relation', async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: 'chuluq',
        customer_id: 'chuluq',
        balance: 1000000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });

  it('should create one to one with relation',async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'joko',
        name: 'Joko',
        email: 'joko@gmail.com',
        phone: '011144566',
        wallet: {
          create: {
            id: 'joko',
            balance: 500000
          }
        }
      },
      include: {
        wallet: true,
      }
    })

    console.info(customer);
  });

  it('should find one to one with relation',async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'joko',
      },
      include: {
        wallet: true,
      }
    })

    console.info(customer);
  });

  it('should find one to one with relation filter',async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null
        }
      },
      include: {
        wallet: true,
      }
    })

    console.info(customer);
  });
});