import { ISubscriberDocument, Subscriber } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getOneSubscriber(query: BasicObjectType): Promise<ISubscriberDocument | null> {
    return Subscriber.findOne(query)
}