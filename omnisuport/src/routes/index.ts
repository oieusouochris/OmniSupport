import { Router } from 'express';
import { someControllerFunction } from '../controllers';

const router = Router();

router.get('/some-route', someControllerFunction);

export default router;