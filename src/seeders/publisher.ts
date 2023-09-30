import { Sequelize } from 'sequelize';
import Publisher from '../models/publisher';

const seedPublishers = async (sequelize: Sequelize) => {
  try {
    const publishersData = [
      { name: 'J.B. Lippincott & Co.' },
      { name: 'Secker & Warburg' },
      { name: 'Charles Scribner\'s Sons' },
    ];

    await Publisher.bulkCreate(publishersData);
    console.log('Publishers seeded successfully.');
  } catch (error) {
    console.error('Error seeding publishers:', error);
  }
};

export default seedPublishers;