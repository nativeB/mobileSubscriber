import { SubscriberInterface, SubscriberDocumentInterface, Subscriber } from "../../mongoose/models";
import {Types} from "mongoose"
import { getObjectId } from "../../utils";
export async function updateOneSubscriber(id: Types.ObjectId | string, subscriber: SubscriberInterface): Promise<SubscriberDocumentInterface|null> {
    return Subscriber.findByIdAndUpdate(getObjectId(id), subscriber, {new: true});
}