import { NextFunction, Request, Response } from "express";
import { countSubscribers } from "../services";

export async function generateStatistics (_req: Request, res: Response, next: NextFunction) {
        try{
                const total = await countSubscribers({});
                const prepaid = await countSubscribers({ serviceType: "MOBILE_PREPAID"});
                const postpaid = await countSubscribers({ serviceType: "MOBILE_POSTPAID"});
                
                res.set("x-total-subscribers",`${total}`)
                res.set("x-prepaid-subscribers",`${prepaid}`)
                res.set("x-postpaid-subscribers",`${postpaid}`)

                next()

        }catch(error){
                return next(error)
        }
}