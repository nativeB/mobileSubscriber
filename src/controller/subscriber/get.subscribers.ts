import { Request, Response } from "express";
import { countSubscribers, getManySubscribers } from "../../services";
import { processQuery } from "../../utils";
import constants from "../../utils/constants";
import { subscriberQueryParamsValidator } from "../../validators";

export const getSubscribers =  async (req: Request, res: Response) => {
  try{
    const query = processQuery(req.query, subscriberQueryParamsValidator);
    const {filter, ...options} = query;
    const totalRecords = await countSubscribers(filter)
    const subscribers = await getManySubscribers(filter, options)

    return res.json({
      success: true,
      totalRecords,
      subscribers
    })
  }catch(error: any) {
    return res.status(500).send({
      success:false,
      message: error.message || constants.STATUS_CODES[500]
  })
}
  };