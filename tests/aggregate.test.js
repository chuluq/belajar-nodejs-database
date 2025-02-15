import {prismaClient} from '../src/prisma-client.js';

describe('Prisma Client', () => {
  it('should do aggregate function',async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      }
    });

    console.info(result);
  });

  it('should do group by function',async () => {
    const result = await prismaClient.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      }
    });

    console.info(result);
  });

  it('should do group by and having function',async () => {
    const result = await prismaClient.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true
      },
      _max: {
        price: true,
        stock: true
      },
      _avg: {
        price: true,
        stock: true
      },
      having: {
        price: {
          _avg: {
            gt: 2000
          }
        }
      }
    });

    console.info(result);
  });
});