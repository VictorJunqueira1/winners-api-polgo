import { Request, Response } from 'express';
import { Winner } from '../models/winner';

export const createWinner = async (req: Request, res: Response): Promise<Response> => {
    const { name, prize, date } = req.body;

    if (!name || !prize || !date) {
        return res.status(400).json({ message: 'Os campos nome, prêmio e data são obrigatórios.' });
    }

    try {
        const winner = new Winner({ name, prize, date: new Date(date) });
        await winner.save();
        return res.status(201).json(winner);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(400).json({ message: 'Ocorreu um erro desconhecido.' });
    }
};

export const getWinners = async (req: Request, res: Response): Promise<Response> => {
    try {
        const winners = await Winner.find();
        return res.status(200).json(winners);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Ocorreu um erro desconhecido.' });
    }
};

export const deleteWinner = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
        const winner = await Winner.findByIdAndDelete(id);
        if (!winner) return res.status(404).json({ message: 'Ganhador não encontrado' });
        return res.status(200).json({ message: 'Ganhador removido com sucesso' });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Ocorreu um erro desconhecido.' });
    }
};