import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded; // Add type assertion to bypass type checking
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
