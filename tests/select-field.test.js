import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should create and select fields', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'ruli',
        email: 'ruli@example.com',
        phone: '01222244444',
        name: 'Ruli',
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe('ruli');
    expect(customer.name).toBe('Ruli');
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it('should select fields', async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});