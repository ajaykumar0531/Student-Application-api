import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});