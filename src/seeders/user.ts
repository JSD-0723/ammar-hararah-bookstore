import { Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import User from '../models/user';

const seedUsers = async (sequelize: Sequelize) => {
  try {
    const usersData = [
      {
        email: 'user1@example.com',
        password: 'password123',
        type: 'customer',
      },
      {
        email: 'user2@example.com',
        password: 'password456',
        type: 'admin',
      },
    ];

    const hashedUsers = await Promise.all(
      usersData.map(async (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        return user;
      })
    );

    await User.bulkCreate(hashedUsers);
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

export default seedUsers;