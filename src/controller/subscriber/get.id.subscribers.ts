import {  Request, Response } from 'express';
import { getOneSubscriber } from '../../services';
import { getObjectId } from '../../utils';
import constants from '../../utils/constants';

export const getSubscriberById =  async (req: Request, res: Response) => {
  try{
    const  subscriberId = req.params.subscriberId;

    const subscriber = await getOneSubscriber({_id : getObjectId(subscriberId) })

    if(!subscriber) {
      return res.status(404).send({
        success:false, 
        message: constants.STATUS_CODES[404]
    })
    }
    return res.json({
      success: true,
      subscriber
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false, 
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };