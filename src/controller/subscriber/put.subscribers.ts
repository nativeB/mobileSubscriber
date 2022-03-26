import { Request, Response } from 'express';
import { updateOneSubscriber } from '../../services';
import constants from '../../utils/constants';
export const updateSubscriber =  async (req: Request, res: Response) => {
  try { 
    const subscriber = await updateOneSubscriber(req.params.subscriberId, req.body)
    
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