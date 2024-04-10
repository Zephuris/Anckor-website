const express = require('express');
const app = express();
const Posts = require('../models/posts')

exports.indexGet = (req, res, next) => {
    console.log('admin /')
    res.render('dashboard.ejs', { path: 'dashboard'})
}

exports.addPostGet = (req, res) => {
    console.log('admin / add post / ')
    res.render('add-post.ejs', { path: 'add-post' })
}

exports.addPostPost = (req, res) => {
    const title = req.body.title
    const slug = req.body.slug
    const category = req.body.category
    const desc = req.body.desc
    const tags = req.body.tags
    console.log('admin / add post / POST ')
    console.log(title, slug, category, desc, tags)
    Posts.collection.insertOne({
        title: title,
        slug: slug,
        category: category,
        desc: desc,
        tags: tags,
    })
    .then((result) => {
        console.log(result + " User created successfully")
        res.render('posts.ejs', { path: 'posts'})
    })
    .catch((err) => {
        console.log(err)
    })
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