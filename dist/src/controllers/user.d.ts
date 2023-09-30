import User from '../models/user';
declare const registerUser: (email: string, password: string, type: string) => Promise<string | null>;
declare const loginUser: (email: string, password: string) => Promise<string | null>;
declare const getUserById: (requestedUserId: number) => Promise<{
    user: User | null;
    message?: string;
}>;
export { registerUser, loginUser, getUserById };
