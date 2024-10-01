import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

const authService = new AuthService();

export async function registerUser(req: Request, res: Response): Promise<void> {
  const { username, name, email, password } = req.body;
  try {
    const newUser = await authService.register(username, name, email, password);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}
