import { SubscriberDocumentInterface, Subscriber } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getManySubscribers(query: BasicObjectType, options: BasicObjectType): Promise<SubscriberDocumentInterface[]> {
    return  Subscriber.find(query,null,options)
}