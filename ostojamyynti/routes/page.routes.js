import express from 'express';
import { isLoggedIn } from '../controllers/auth.controller.js';
import newAdvert, { listAdverts, listUserAdverts } from '../controllers/advert.controller.js';
import { listUsers } from '../controllers/user.controller.js';


const routes = express.Router();

routes.get('/', [ isLoggedIn, listAdverts, listUsers ], (req, res) => {
    res.render('index', {
        user: req.user,
        users: req.users,
        list: req.list
    });
});

routes.get('/login', (req, res) => {
    res.render('login')
});
routes.get('/register', (req, res) => {
    res.render('register');
});

routes.get('/newAdvert', isLoggedIn, (req, res) => {
    res.render('new-advert', {
        user:req.user
    });
});

routes.get('/profile', [isLoggedIn, listUserAdverts], (req, res) => {
    if(req.list) {
        res.render('profile', {
            list: req.list,
            user: req.user
        });
    } else {
        res.redirect('/login');
    }
});

routes.post('/newAdvert', [isLoggedIn, newAdvert], (req, res) => {
    res.render('new-advert', {
        user: req.user
    });
});

export default routes;