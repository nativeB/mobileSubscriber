import { ISubscriberDocument, Subscriber } from "../../models";

export async function getOneSubscriber(query: { [key: string]: any}): Promise<ISubscriberDocument | null> {
    return Subscriber.findOne(query)
}