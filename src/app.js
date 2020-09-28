import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import routes from './routes/app.routes';
import './database';
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cors());

//Routes
app.use(routes);

//Statics Files
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'), err => {
        if(err){
            res.status(500).send(err);
        }
    })
})

export default app;