import { SubscriberDocumentInterface, Subscriber } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getOneSubscriber(query: BasicObjectType): Promise<SubscriberDocumentInterface | null> {
    return Subscriber.findOne(query)
}