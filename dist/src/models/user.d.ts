import { Model } from 'sequelize';
interface UserAttributes {
    id: number;
    email: string;
    password: string;
    type: string;
}
interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {
}
declare class User extends Model<UserAttributes, UserCreationAttributes> {
    id: number;
    email: string;
    password: string;
    type: string;
    comparePassword(password: string): boolean;
}
export default User;
