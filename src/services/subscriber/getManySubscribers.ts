import { ISubscriberDocument, Subscriber } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function getManySubscribers(query: BasicObjectType, options: BasicObjectType): Promise<ISubscriberDocument[]> {
    return  Subscriber.find(query,null,options)
}