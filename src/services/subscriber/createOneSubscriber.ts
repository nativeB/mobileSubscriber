import { SubscriberInterface, SubscriberDocumentInterface, Subscriber } from "../../mongoose/models";

export async function createOneSubscriber(subscriber: SubscriberInterface): Promise<SubscriberDocumentInterface> {
    const newSubscriber = new Subscriber(subscriber);
    return  newSubscriber.save();
}