import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import Author from './author';
import Publisher from './publisher';
import Genre from './genre';

interface BookAttributes {
  id: number;
  title: string;
  authorId: number;
  publisherId: number;
  genreId: number;
}

interface BookCreationAttributes extends Omit<BookAttributes, 'id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> {
  public id!: number;
  public title!: string;
  public authorId!: number;
  public publisherId!: number;
  public genreId!: number;

  // Add associations
  public readonly author?: Author;
  public readonly publisher?: Publisher;
  public readonly genre?: Genre;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Author,
        key: 'id',
      },
    },
    publisherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Publisher,
        key: 'id',
      },
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Genre,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
  }
);

export default Book;