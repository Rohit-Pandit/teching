import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler.middleware.js';

import {CLIENT_URL} from './config/env.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);



app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'saka server is running'
  });
});

import indexRoutes from './routes/index.routes.js';
app.use('/api/v1', indexRoutes);


export default app;