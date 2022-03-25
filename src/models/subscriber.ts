import * as mongoose from 'mongoose'
import validator from "validator"
import constants from "../utils/constants"

export interface ISubscriber {
  id: number;
  msisdn: string;
  customerIdOwner: number;
  customerIdUser: number;
  serviceType: string;
  serviceStartDate: Date
}

interface SubscriberModelInterface extends mongoose.Model<ISubscriberDocument> {
}

export interface ISubscriberDocument extends mongoose.Document {
  title: string;
  description: string;
}

const SubscriberSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique:true
  },
  msisdn: {
    type: String, 
    required: true,
    validate: {
      validator(phone: string){
        return validator.isMobilePhone(phone)
      }
    },
    customerIdOwner: {
      type: Number,
      required: true
    },
    customerIdUser: {
      type: Number,
      required: true
    },
    serviceType: {
      type: String,
      required: true,
      enum: constants.SERVICE_TYPES
    },
    serviceStartDate: {
      type: Date,
      required: true,
      default: Date.now()
    }
  }
},
{
  timestamps: true,
})

const Subscriber = mongoose.model<ISubscriberDocument, SubscriberModelInterface>('Subscriber', SubscriberSchema)


export { Subscriber }




