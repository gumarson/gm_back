import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoute';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', AuthRoutes);

export default app;
