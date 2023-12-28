const express = require('express');
const app = express();

exports.indexGet = (req, res, next) => {
    console.log('admin /')
    res.render('dashboard.ejs', { path: 'dashboard'})
}

exports.addPostGet = (req, res) => {
    console.log('admin / add post / ')
    res.render('add-post.ejs', { path: 'add-post' })
}

exports.postsGet = (req,res) => {
    console.log('admin / posts / ')
    res.render('posts.ejs', { path: 'posts'})
}

exports.usersGet = (req,res) => {
    console.log('admin / users / ')
    res.render('users.ejs')
}

exports.usersPost = (req,res) => {
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
}

exports.logoutPost = (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/login')
}