import express from 'express';
import joi from 'joi';

const app = express.Router();

export { app as routes };

const users = [];

app.post('/users', ((req, res) => {
    const schema = {
        name: joi.string().min(1).required(),
        password: joi.string().min(1).required()
    };
    const result = joi.validate(req.body, schema);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
    const user = {
        name: req.body.name,
        password: req.body.password
    };
    users.push(user);
    res.send(user);
}));

app.get('/', ((req, res) => {
    res.send('hello world!')
}));

app.get('/users', ((req, res) => {
    res.send(users)
}));

app.get('/users/:name', ((req, res) => {
    res.send(req.body.name)
}));



app.delete('/users/:name', ((req, res) => {
    const user = users.find(u => u.name === req.params.name);
    if (!user) res.send(404).send('User does mot exist!');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
}));

app.patch('/users/:name', ((req, res) => {
    res.send({})
}));
