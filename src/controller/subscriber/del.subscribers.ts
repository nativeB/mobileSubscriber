import { Request, Response } from "express";
import { deleteOneSubscriber } from "../../services";
export const deleteSubscriber =  async (req: Request, res: Response) => {
  const subscriber = await deleteOneSubscriber(req.params.subscriberId)

  return res.json({
    success: true,
    subscriber
  })
};