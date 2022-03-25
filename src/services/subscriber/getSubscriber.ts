import { ISubscriberDocument, Subscriber } from "../../models";

export async function getSubscriber(query: { [key: string]: any}, options: { [key: string]: any}): Promise<ISubscriberDocument[]> {
    return  Subscriber.find(query,null,options)
}