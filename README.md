# mobile subscriber api

## prerequisites
 * typescript ^4.6.3
 * mongodb  ^4.4
 * nodejs ^14


## Getting Started
 * open terminal to folder
 * run command npm i 
 * run command npm run build:watch
 * open another terminal to folder
 * run npm run start
 
## Routes
 # Post : /subscribers
    create a mobile subscriber
 ## body
1. customerIdOwner(customer_id_owner)  
     * Number 
     * Required 
2. customerIdUser(customer_id_user)  
     * Number 
     * Required 
3. serviceType(service_type)  
     * Enum MOBILE_PREPAID | MOBILE_POSTPAID 
     * Required
4.  msisdn  
     * String 
     * Required 
     * Unique 
     * E 164 validation

 # Put : /subscribers/:subscriberId
    update a mobile subscriber
 ## params
1. subscriptionId
     * Objectid
     * Required 
 ## body
1. customerIdOwner(customer_id_owner)  
     * Number 
2. customerIdUser(customer_id_user)  
     * Number 
3. serviceType(service_type)  
     * Enum MOBILE_PREPAID | MOBILE_POSTPAID 
     * Required 
4.  msisdn  
     * String 
     * Unique 
     * E 164 validation

 # Get : /subscribers/:subscriberId
    get a mobile subscriber
 ## params
1. subscriptionId
    * Objectid
    * Required 
 ## params
1. customerIdOwner(customer_id_owner)  
     * Number 
2. customerIdUser(customer_id_user)  
     * Number 
3. serviceType(service_type)  
     * Enum MOBILE_PREPAID | MOBILE_POSTPAID 
     * Required 
4.  msisdn  
     * String 
     * Unique 
     * E 164 validation

 # Get : /subscribers
    get multiple mobile subscribers by query, uses mongo queries formatted for uri queries. eg ?id__in=1,2
    
[https://www.npmjs.com/package/query-params-mongo](https://www.npmjs.com/package/query-params-mongo)
 


 # Delete : /subscribers/:subscriberId
    delete mobile subscriber
    
[https://www.npmjs.com/package/query-params-mongo](https://www.npmjs.com/package/query-params-mongo)
 ## params
1. subscriptionId
    * Objectid
    * Required 


