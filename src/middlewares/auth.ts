import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';
import { getUserById } from '../controllers/user';

interface DecodedToken {
    id: number;
}

const authenticateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
        const user = await getUserById(decoded.id);

        if (!user) {
            throw new Error("Failed to retreive user!");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};


export default authenticateMiddleware;