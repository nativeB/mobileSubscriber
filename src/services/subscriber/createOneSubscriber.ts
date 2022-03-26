import { ISubscriber, ISubscriberDocument, Subscriber } from "../../mongoose/models";

export async function createOneSubscriber(subscriber: ISubscriber): Promise<ISubscriberDocument> {
    const newSubscriber = new Subscriber(subscriber);
    return  newSubscriber.save();
}