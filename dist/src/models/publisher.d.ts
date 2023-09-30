import { Model } from 'sequelize';
declare class Publisher extends Model {
    id: number;
    name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Publisher;
