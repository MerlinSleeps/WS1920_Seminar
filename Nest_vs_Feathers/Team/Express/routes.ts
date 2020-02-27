import express from 'express';

const app = express.Router();

export { app as routes };

const users = [];
app.get('/', ((req, res) => {
    res.send('hello world!')
}));

app.get('/users', ((req, res) => {
    res.send(users)
}));

app.get('/users/:name', ((req, res) => {
    res.send(req.body.name)
}));

app.post('/users', ((req, res) => {
    const user = {
        name: req.body.name,
        password: req.body.password
    };
    users.push(user);
    res.send(user);
}));

app.delete('/users/:name', ((req, res) => {
    res.send({})
}));

app.patch('/users/:name', ((req, res) => {
    res.send({})
}));
