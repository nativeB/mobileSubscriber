
import {check} from "express-validator";
import { Subscriber } from "../mongoose/models";
import constants from "../utils/constants";

export const subscriberQueryParamsValidator = {
    _id: { datatype: "objectid", required: false},
    id: { datatype: "number", required: false},
    msisdn:  { datatype: "string", required: false },
    customerIdOwner:  { datatype: "number", required: false},
    customerIdUser: { datatype: "number", required: false},
    serviceType: { datatype: "string", required: false},
    serviceStartDate: { datatype: "date", required: false}
}

export const subscriberPostRouteValidator = [
    check("customerIdOwner", constants.ERROR_MESSAGES.customerIdOwner.required).isNumeric().withMessage(constants.ERROR_MESSAGES.customerIdOwner.type).isLength({min:0}).toInt(),
    check("customerIdUser", constants.ERROR_MESSAGES.customerIdUser.required).isNumeric().withMessage(constants.ERROR_MESSAGES.customerIdUser.type).isLength({min:0}).toInt(),
    check("serviceType", constants.ERROR_MESSAGES.serviceType.required).isString().isIn(constants.SERVICE_TYPES).withMessage(constants.ERROR_MESSAGES.serviceType.type),
    check("msisdn", constants.ERROR_MESSAGES.msisdn.required).exists().matches(/^\+[1-9]\d{10,14}$/).withMessage(constants.ERROR_MESSAGES.msisdn.type).custom(
        async(msisdn:string)=> {
        if(await Subscriber.countDocuments({msisdn})){
            return Promise.reject()
        }
        return null
    }).withMessage(constants.ERROR_MESSAGES.msisdn.exists)
  ]
export const subscriberPutRouteValidator = [
    check("customerIdOwner").optional().isNumeric().withMessage(constants.ERROR_MESSAGES.customerIdOwner.type).isLength({min:0}).toInt(),
    check("customerIdUser").optional().isNumeric().withMessage(constants.ERROR_MESSAGES.customerIdUser.type).isLength({min:0}).toInt(),
    check("serviceType").optional().isString().isIn(constants.SERVICE_TYPES).withMessage(constants.ERROR_MESSAGES.serviceType.type),
    check("msisdn").optional().exists().matches(/^\+[1-9]\d{10,14}$/).withMessage(constants.ERROR_MESSAGES.msisdn.type).custom(
        async(msisdn:string)=> {
        if(await Subscriber.countDocuments({msisdn})){
            return Promise.reject()
        }
        return null
    }).withMessage(constants.ERROR_MESSAGES.msisdn.exists),
    check("subscriberId",constants.ERROR_MESSAGES.subscriberId.required ).exists().isMongoId().withMessage(constants.ERROR_MESSAGES.subscriberId.type)
  ]
export const subscriberDeleteRouteValidator = [
    check("subscriberId",constants.ERROR_MESSAGES.subscriberId.required ).exists().isMongoId().withMessage(constants.ERROR_MESSAGES.subscriberId.type)
  ]
export const subscriberGetRouteValidator = [
    check("subscriberId",constants.ERROR_MESSAGES.subscriberId.required ).exists().isMongoId().withMessage(constants.ERROR_MESSAGES.subscriberId.type)
  ]

