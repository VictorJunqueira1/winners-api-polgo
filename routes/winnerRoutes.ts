import { Router } from 'express';
import { createWinner, getWinners, deleteWinner } from '../controllers/winnerController';

const router = Router();

router.post('/', createWinner);
router.get('/', getWinners);
router.delete('/:id', deleteWinner);

export default router;