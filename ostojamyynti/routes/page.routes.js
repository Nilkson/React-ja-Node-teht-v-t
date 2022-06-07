import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.get('/login', (req, res) => {
    res.render('login')
});
routes.get('/register', (req, res) => {
    res.render('register');
});

export default routes;