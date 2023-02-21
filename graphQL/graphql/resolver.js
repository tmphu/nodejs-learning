const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const graphqlResolver = {
  LayNguoiDung: async () => {
    let result = await prisma.user.findMany();
    return result.map((item) => {
      return {
        id: item.user_id,
        hoTen: item.full_name,
        tuoiTac: null,
        email: item.email,
      };
    });
    // return [
    //   {
    //     id: '1',
    //     hoTen: 'John Henry',
    //     tuoiTac: 23,
    //     email: 'john@gmail.com',
    //   },
    //   {
    //     id: '2',
    //     hoTen: 'Iron Man',
    //     tuoiTac: 39,
    //     email: 'ironman@gmail.com',
    //   },
    // ];
  },
  ThemNguoiDung: (argument) => {
    let { maNguoiDung, hoTen } = argument;
    return [maNguoiDung, hoTen];
  },
  getFood: async () => {
    return await prisma.food.findMany({
      include: {
        food_type: true,
      },
    });
  },
};

module.exports = graphqlResolver;
