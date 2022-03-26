import { Request, Response } from 'express';
import { getOneSubscriber } from '../../services';
import { getObjectId } from '../../utils';

export const getSubscriberById =  async (req: Request, res: Response) => {
    const  subscriberId = req.params.subscriberId;

    const subscriber = await getOneSubscriber({id : getObjectId(subscriberId) })

    return res.json({
      success: true,
      subscriber
    })
  };