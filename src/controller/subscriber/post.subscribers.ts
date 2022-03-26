import { Request, Response } from 'express';
import { createOneSubscriber } from '../../services';
export const createSubscriber =  async (req: Request, res: Response) => {
    const subscriber = createOneSubscriber(req.body);
    
    return res.json({
      success: true,
      subscriber
    })
  };