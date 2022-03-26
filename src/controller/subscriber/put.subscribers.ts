import { Request, Response } from 'express';
import { updateOneSubscriber } from '../../services';
export const updateSubscriber =  (req: Request, res: Response) => {
  const subscriber = updateOneSubscriber(req.params.id, req.body)
  
  return res.json({
    success: true,
    subscriber
  })
};