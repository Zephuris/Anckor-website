const express = require('express');
const router = express.Router()
const Users = require('../models/users')
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
    res.render('login.ejs')
    console.log('/ login')
})

router.post('/', (req, res) => {
    console.log('/ login post')
    const email = req.body.email
    const password = req.body.password
    Users.findOne({ email: email })
    .then((result) => {
        if (result.password === password) {
            console.log('ok')
            req.session.isLoggedIn = true;
            req.session.user = result;
            res.redirect('/admin')
        } else {
            console.log('nok')
            res.redirect('/login')
        }
    })
    .catch((err) => {
        console.log('error: ' + err)
        res.redirect('/login')
    })
    // Users.findOne({ email })
    // .then(user => {
    //   if (!user) {
    //     return res.status(422).render('/login', {
    //       path: '/login',
    //       pageTitle: 'Login',
    //       errorMessage: 'Invalid email or password',
    //       validationErrors: [{ param: 'email' }, { param: 'password' }],
    //       oldInput: { email, password }
    //     });
    //   }
    //   bcrypt
    //     .compare(password, user.password)
    //     .then(doMatch => {
    //       if (doMatch) {
    //         req.session.isLoggedIn = true;
    //         req.session.user = user;
    //         return req.session.save(err => {
    //           if (err) console.log(err);
    //           res.redirect('/admin');
    //         });
    //       }
    //     //   req.flash('error', 'Invalid email or password');
    //       return res.redirect('/login');
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       res.redirect('/login');
    //     });
    // })
    // .catch(err => {
    //   const error = new Error(err);
    //   error.httpStatusCode = 500;
    //   next(error);
    // });
})

module.exports = router
