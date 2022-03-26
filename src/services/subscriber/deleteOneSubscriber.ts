import { SubscriberDocumentInterface, Subscriber } from "../../mongoose/models";
import {Types} from "mongoose"
import { getObjectId } from "../../utils";
export async function deleteOneSubscriber(id: Types.ObjectId | string): Promise<SubscriberDocumentInterface|null> {
    return Subscriber.findByIdAndDelete(getObjectId(id));
}