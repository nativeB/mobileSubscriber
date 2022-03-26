import * as mongoose from "mongoose"
import constants from "../../utils/constants"
import preValidate from "../hooks/subscriber/preValidate";
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
  id: number;
  msisdn: string;
  customerIdOwner: number;
  customerIdUser: number;
  serviceType: string;
  serviceStartDate: Date
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
    unique:true,
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
    type: Number,
    required: true,
    default: Math.round(Date.now()/1000)
  }
  },
{
  timestamps: true
})

SubscriberSchema.pre("validate",preValidate)
const Subscriber = mongoose.model<ISubscriberDocument, SubscriberModelInterface>("Subscriber", SubscriberSchema)


export { Subscriber }




