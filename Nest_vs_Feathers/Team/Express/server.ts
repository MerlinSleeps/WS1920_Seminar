import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000,() => {
    console.log('Server is listening on http://localhost:3000');
});
