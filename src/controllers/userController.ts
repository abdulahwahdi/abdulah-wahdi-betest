import { Request, Response } from 'express';
import { createUser, getAll, updateUser, deleteUser, getUserByProperty } from '../services/userService';

export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllHandler = async (req: Request, res: Response) => {
    try {
        const users = await getAll();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getByNumber = async (req: Request, res: Response) => {
    try {
        const user = await getUserByProperty('accountNumber', req.params.accountNumber);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const getByIdentity = async (req: Request, res: Response) => {
    try {
        const user = await getUserByProperty('identityNumber', req.params.identityNumber);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}


export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
