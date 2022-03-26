import {  Subscriber } from "../../mongoose/models";
import { BasicObjectType } from "../../types";

export async function countSubscribers(query: BasicObjectType): Promise<number> {
    return  Subscriber.countDocuments(query)
}