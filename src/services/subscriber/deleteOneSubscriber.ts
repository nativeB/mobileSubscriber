import { ISubscriberDocument, Subscriber } from "../../mongoose/models";
import {Types} from "mongoose"
import { getObjectId } from "../../utils";
export async function deleteOneSubscriber(id: Types.ObjectId | string): Promise<ISubscriberDocument|null> {
    return Subscriber.findByIdAndDelete(getObjectId(id));
}