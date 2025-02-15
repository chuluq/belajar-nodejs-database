import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should be able to execute transaction', async () => {
    const [choirul, chuluq] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: 'choirul',
          email: 'choirul@example.com',
          name: 'Choirul',
          phone: '1234567890',
        },
      }),
      prismaClient.customer.create({
        data: {
          id: 'chuluq',
          email: 'chuluq@example.com',
          name: 'Chuluq',
          phone: '1212121211',
        },
      }),
    ]);

    expect(choirul.name).toBe('Choirul');
    expect(chuluq.name).toBe('Chuluq');
  });

  it('should be able to execute interactive transaction', async () => {
    const [choirul, chuluq] = await prismaClient.$transaction(
        async (prisma) => {
          const choirul = await prisma.customer.create({
            data: {
              id: 'choirul2',
              email: 'choirul2@example.com',
              name: 'Choirul',
              phone: '12345678902',
            },
          });
          const chuluq = await prisma.customer.create({
            data: {
              id: 'chuluq2',
              email: 'chuluq2@example.com',
              name: 'Chuluq',
              phone: '12121211221',
            },
          });

          return [choirul, chuluq];
        });

    expect(choirul.name).toBe('Choirul');
    expect(chuluq.name).toBe('Chuluq');
  });
});