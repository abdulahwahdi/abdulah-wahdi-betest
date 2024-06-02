import { Router } from 'express';
import { createUserHandler, updateUserHandler, deleteUserHandler, getAllHandler, getByNumber, getByIdentity } from '../controllers/userController';

const router = Router();

router.post('/', createUserHandler);
router.get('/', getAllHandler);
router.get('/by-number/:accountNumber', getByNumber);
router.get('/by-identity/:identityNumber', getByIdentity);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;
