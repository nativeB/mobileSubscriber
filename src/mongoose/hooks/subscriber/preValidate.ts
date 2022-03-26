import { SubscriberDocumentInterface, Subscriber } from "../../models";
import {get} from "lodash";
export default async function (this: SubscriberDocumentInterface, next: ()=>void){
    const doc = this;
    const last = await Subscriber.find().sort({id:-1}).limit(1);
    doc.id = get(last, "0.id", 0) + 1
    next();
}