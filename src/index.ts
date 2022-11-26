import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';



mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')
    .then(() => {
        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });

        console.log('✅ Conectado ao MongoDB');
    })
    .catch(() => console.log('❌ Erro ao conectar ao MongoDB'));

