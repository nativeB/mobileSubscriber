import {createSubscriber, getSubscribers, getSubscriberById, updateSubscriber} from "../controller";

import { Router } from "express";
import { subscriberDeleteRouteValidator, subscriberGetRouteValidator, subscriberPostRouteValidator, subscriberPutRouteValidator } from "../validators";
import { validateIncoming } from "../middleware";
import { deleteSubscriber } from "../controller/subscriber/del.subscribers";

const router = Router();

router.get("/health", (_,res)=>{
    res.send("hello")
});
router.get("/subscribers", getSubscribers);
router.get("/subscribers/:subscriberId", subscriberGetRouteValidator, validateIncoming, getSubscriberById );
router.post("/subscribers", subscriberPostRouteValidator, validateIncoming, createSubscriber);
router.put("/subscribers/:subscriberId",subscriberPutRouteValidator, validateIncoming,  updateSubscriber);
router.delete("/subscribers/:subscriberId",subscriberDeleteRouteValidator, validateIncoming,  deleteSubscriber);

export default router;