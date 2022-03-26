import {Types} from "mongoose"
import qpm = require("query-params-mongo");
export function getObjectId(id: string| Types.ObjectId){
    return typeof id === "string"? new Types.ObjectId(id) : id
}

const qpmInit = qpm({
    autoDetect: [{ fieldPattern: /_id$/, dataType: "objectId" }],
    converters: {objectId: Types.ObjectId}
})
export function processQuery(query: { [key:string]:any}, fieldSpec:{ [key:string]:any}, strict: boolean = true ){
    return qpmInit(query, fieldSpec, strict);
}