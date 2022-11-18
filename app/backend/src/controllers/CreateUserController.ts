import { CreateUserService } from './../services/CreateUserService';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(
    private service: CreateUserService
  ){}

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      const id = await this.service.create(username, password);

      return res.status(201).json({ id });
    } catch (err) {
        return res.status(400).json(err);
      }
    }
  }

