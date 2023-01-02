import { Router } from 'express';
import { feedController } from '../controllers/feed/FeedController';

export const FeedRoute = Router();

FeedRoute.get('/', feedController.handle);