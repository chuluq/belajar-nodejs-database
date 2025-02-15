import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should be able to create customer', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'chuluq',
        email: 'chuluq@gmail.com',
        name: 'Choirul Chuluq',
        phone: '1234567890',
      },
    });

    expect(customer.id).toBe('chuluq');
    expect(customer.email).toBe('chuluq@gmail.com');
    expect(customer.name).toBe('Choirul Chuluq');
    expect(customer.phone).toBe('1234567890');
  });

  it('should be able to update customer', async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: 'Moch Choirul Chuluq',
      },
      where: {
        id: 'chuluq',
      },
    });

    expect(customer.id).toBe('chuluq');
    expect(customer.email).toBe('chuluq@gmail.com');
    expect(customer.name).toBe('Moch Choirul Chuluq');
    expect(customer.phone).toBe('1234567890');
  });

  it('should be able to read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'chuluq',
      },
    });

    expect(customer.id).toBe('chuluq');
    expect(customer.email).toBe('chuluq@gmail.com');
    expect(customer.name).toBe('Moch Choirul Chuluq');
    expect(customer.phone).toBe('1234567890');
  });

  it('should be able to delete customer', async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: 'chuluq',
      },
    });

    expect(customer.id).toBe('chuluq');
    expect(customer.email).toBe('chuluq@gmail.com');
    expect(customer.name).toBe('Moch Choirul Chuluq');
    expect(customer.phone).toBe('1234567890');
  });
});