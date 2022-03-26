import { Request, Response } from "express";
import { createOneSubscriber } from "../../services";
import constants from "../../utils/constants";
export const createSubscriber =  async (req: Request, res: Response): Promise<Response> => {
  try {
    const subscriber = await createOneSubscriber(req.body);
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