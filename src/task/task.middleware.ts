import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TaskMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { listId } = req.query;
    const task = req.body;

    console.log('TaskMiddleware - listId:');
    
    if (!listId) {
      return res
        .status(400)
        .json({ message: 'listId query parameter is required' });
    }

    if (!task || Object.keys(task).length === 0) {
      return res.status(400).json({ message: 'Task body is required' });
    }

    next();
  }
}
