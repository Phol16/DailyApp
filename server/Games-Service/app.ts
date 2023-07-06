import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

//Third party middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

export default app
