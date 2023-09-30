import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const generateToken = (userId: number) => {
  const secret = 'your-secret-key';
  const expiresIn = '1h';

  return jwt.sign({ userId }, secret, { expiresIn });
};

const registerUser = async (email: string, password: string, type: string): Promise<string | null> => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return 'Email is already in use';
    }

    const newUser = await User.create({ email, password, type });
    const token = generateToken(newUser.id);

    return token;
  } catch (error) {
    console.error('Error during user registration:', error);
    return 'Internal server error';
  }
};

const loginUser = async (email: string, password: string): Promise<string | null> => {
  try {
    const user = await User.findOne({ where: { email } });

    if (user && user.comparePassword(password)) {
      const token = generateToken(user.id);

      return token;
    } else {
      return 'Invalid email or password';
    }
  } catch (error) {
    console.error('Error during user login:', error);
    return 'Internal server error';
  }
};

async function getUserById(userId: number): Promise<User | null> {
  try {
    const user = await User.findByPk(userId);

    return user || null;
  } catch (error) {
    // Handle errors, log them, etc.
    console.error('Error fetching user by ID:', error);

    return null;
  }
}

export { registerUser, loginUser, getUserById };
