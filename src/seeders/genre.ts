import { Sequelize } from 'sequelize';
import Genre from '../models/genre';

const seedGenres = async (sequelize: Sequelize) => {
  try {
    const genresData = [
      { name: 'Fiction' },
      { name: 'Dystopian' },
      { name: 'Classics' },
    ];

    await Genre.bulkCreate(genresData);
    console.log('Genres seeded successfully.');
  } catch (error) {
    console.error('Error seeding genres:', error);
  }
};

export default seedGenres;