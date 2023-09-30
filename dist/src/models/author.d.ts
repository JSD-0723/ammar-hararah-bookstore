import { Model } from 'sequelize';
declare class Author extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Author;
