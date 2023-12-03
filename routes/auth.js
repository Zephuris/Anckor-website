const express = require('express');
const router = express.Router()
const Users = require('../models/users')

router.get('/', (req, res) => {
    res.render('login.ejs')
    console.log('/ login')
})

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    Users.findOne({ email: email })
    .then((result) => {
        if (result.password === password) {
            console.log('ok')
        }
        console.log('nok')
    })
    .catch((err) => {
        console.log('error: ' + err)
    })
})

module.exports = router
