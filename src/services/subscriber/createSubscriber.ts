import { ISubscriber, ISubscriberDocument, Subscriber } from "../../models";

export async function createSubscriber(subscriber: ISubscriber): Promise<ISubscriberDocument> {
    const newSubscriber = new Subscriber(subscriber);
    return  newSubscriber.save();
}