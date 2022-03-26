import {createSubscriber, getSubscribers, getSubscriberById, updateSubscriber} from '../controller';

import { Router } from 'express';

const router = Router();

router.get('subscribers', getSubscriberById);
router.get('subscribers/:subscriberId', getSubscribers);
router.post('subscribers', createSubscriber);
router.put('subscribers/:subscriberId', updateSubscriber);

export default router;