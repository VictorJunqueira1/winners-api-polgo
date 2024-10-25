import express from 'express';
import bodyParser from 'body-parser';
import winnerRoutes from './routes/winnerRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';

const app = express();
dotenv.config();
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use('/api/winners', winnerRoutes);

// Fazendo conexão com MongoDB
connectDB();

// Iniciar o servidor
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});