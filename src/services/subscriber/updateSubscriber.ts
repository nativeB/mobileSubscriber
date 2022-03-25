import { ISubscriber, ISubscriberDocument, Subscriber } from "../../models";
import {Types} from "mongoose"
export async function updateSubscriber(id: Types.ObjectId, subscriber: ISubscriber): Promise<ISubscriberDocument|null> {
    return Subscriber.findByIdAndUpdate(id, subscriber);
}