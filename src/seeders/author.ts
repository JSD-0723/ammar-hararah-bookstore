
import { Sequelize } from 'sequelize';
import Author from '../models/author';

const seedAuthors = async (sequelize: Sequelize) => {
  try {
    const authorsData = [
      { name: 'Harper Lee' },
      { name: 'George Orwell' },
      { name: 'F. Scott Fitzgerald' },
    ];

    await Author.bulkCreate(authorsData);
    console.log('Authors seeded successfully.');
  } catch (error) {
    console.error('Error seeding authors:', error);
  }
};

export default seedAuthors;