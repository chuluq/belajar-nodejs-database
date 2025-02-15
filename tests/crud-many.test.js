import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should create many records', async () => {
    const {count} = await prismaClient.customer.createMany({
      data: [
        {
          id: 'budi',
          email: 'budi@example.com',
          name: 'Budi',
          phone: '1234',
        },
        {
          id: 'aji',
          email: 'aji@example.com',
          name: 'Aji',
          phone: '0123456789',
        },
      ]
    });

    expect(count).toBe(2);
  });

  it('should be able to update many records', async () => {
    const {count} = await prismaClient.customer.updateMany({
      data: {
        email: 'budilagi@example.com'
      },
      where: {
        name: "Budi"
      }
    });
    expect(count).toBe(1);
  });

  it('should be able to delete many records', async () => {
    const {count} = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada"
      }
    });
    expect(count).toBe(0);
  });

  it('should be able to read many records', async () => {
    const customers = await prismaClient.customer.findMany();
    console.info(customers)
    expect(customers.length).toBe(8);
  });
});