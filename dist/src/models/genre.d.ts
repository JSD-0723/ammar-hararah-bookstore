import { Model } from 'sequelize';
declare class Genre extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Genre;
