import { Model } from 'sequelize';
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
interface BookCreationAttributes extends Omit<BookAttributes, 'id'> {
}
declare class Book extends Model<BookAttributes, BookCreationAttributes> {
    id: number;
    title: string;
    authorId: number;
    publisherId: number;
    genreId: number;
    readonly author?: Author;
    readonly publisher?: Publisher;
    readonly genre?: Genre;
}
export default Book;
