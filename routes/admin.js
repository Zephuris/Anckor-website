const express = require('express');
const router = express.Router()
const adminController = require('../controllers/admin')
const Users = require('../models/users')
const isAuth = require('../controllers/isAuth')

router.get('/', isAuth, adminController.indexGet)

router.get('/add-post', isAuth, adminController.addPostGet)

router.post('/add-post', isAuth, (req, res) => {
    //  
})

router.get('/posts', isAuth, adminController.postsGet)

router.get('/users', isAuth, adminController.usersGet)

router.post('/users', isAuth, adminController.usersPost)

router.post('/logout', isAuth, adminController.logoutPost)

module.exports = router