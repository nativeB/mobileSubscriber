import { Request, Response } from 'express';
import { getManySubscribers } from '../../services';
import { processQuery } from '../../utils';

export const getSubscribers =  async (req: Request, res: Response) => {
    const query = processQuery(req.query, {
      id: { datatype: "number", required: false},
      msisdn:  { datatype: "string", required: false },
      customerIdOwner:  { datatype: "number", required: false},
      customerIdUser: { datatype: "number", required: false},
      serviceType: { datatype: "string", required: false},
      serviceStartDate: { datatype: "date", required: false}
    });
    const {filter, ...options} = query;
    const subscribers = await getManySubscribers(filter, options)

    return res.json({
      success: true,
      subscribers
    })
  };