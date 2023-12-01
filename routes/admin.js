const express = require('express');
const router = express.Router()
const adminController = require('../controllers/admin')
const Users = require('../models/users')

router.get('/', adminController.indexGet)

router.get('/add-post', (req, res) => {
    console.log('admin / add post / ')
    res.render('add-post.ejs', { path: 'add-post' })
})

router.post('/add-post', (req, res) => {
    //  
})

router.get('/posts', (req,res) => {
    console.log('admin / posts / ')
    res.render('posts.ejs', { path: 'posts'})
})

router.get('/users', (req,res) => {
    console.log('admin / users / ')
    res.render('users.ejs')
})

router.post('/users', (req,res) => {
    Users.collection.insertOne({
        name: 'admin',
        email: 'admin@example.com',
        password: 'password',
        token: 'token'
    })
    .then((result) => {
        console.log(result + " User created successfully")
    })
    .catch((err) => {
        console.log(err)
    })
})

router.post('/logout', (req, res) => {
    //
})

module.exports = router