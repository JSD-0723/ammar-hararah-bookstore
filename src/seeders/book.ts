import { Sequelize } from 'sequelize';
import Book from '../models/book';

const seedBooks = async (sequelize: Sequelize) => {
  try {
    const booksData = [
      {
        title: 'To Kill a Mockingbird',
        authorId: 1,
        publisherId: 1,
        genreId: 1,
      },
      {
        title: '1984',
        authorId: 2,
        publisherId: 2,
        genreId: 2,
      },
      {
        title: 'The Great Gatsby',
        authorId: 3,
        publisherId: 3,
        genreId: 3,
      },
    ];

    await Book.bulkCreate(booksData);
    console.log('Books seeded successfully.');
  } catch (error) {
    console.error('Error seeding books:', error);
  }
};

export default seedBooks;