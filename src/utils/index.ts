import {Types} from "mongoose"
import qpm = require('query-params-mongo');
export function getObjectId(id: string| Types.ObjectId){
    return typeof id === 'string'? new Types.ObjectId(id) : id
}

export function queryProcessor(){
    return qpm({
        autoDetect: [{ fieldPattern: /_id$/, dataType: 'objectId' }],
        converters: {objectId: Types.ObjectId}
    });
}