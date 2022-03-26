import { ServiceTypes } from "../types";


const SERVICE_TYPES: ServiceTypes[]  = [ "MOBILE_PREPAID", "MOBILE_POSTPAID"]
const STATUS_CODES:  {
    [key: string]: string
} = {
    200: "Successful",
    500: "An error occurred, please try later",
    404: "The resource was not found",
    400: "Input parameters failed validation"
}
const ERROR_MESSAGES: {
    [key:string]:  {
        required: string;
        type: string;
        exists?: string;
    }
} = {
    customerIdOwner: {
        required: "Customer id of owner is required",
        type: "Customer id of owner should be a number"
    },
    customerIdUser: {
        required: "Customer Id of user is required",
        type: "Customer Id of user owner should be a number"
    },
    serviceType: {
        required: "Service Type is  required",
        type: `Service type must be one of ${SERVICE_TYPES.join(",")}`
    },
    msisdn: {
        required: "msisdn is required",
        type: "msisdn must be in E164 format",
        exists: "msisdn already exists!"
    },
    subscriberId: {
        required: "subscriberId param is required",
        type: "Subscriber id should be an objectid"
    }
}
const constants = Object.freeze({
    SERVICE_TYPES,
    STATUS_CODES,
    ERROR_MESSAGES
})

export default constants;