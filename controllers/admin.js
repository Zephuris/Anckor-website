const express = require('express');
const app = express();

exports.indexGet = (req, res, next) => {
    console.log('admin /')
    res.render('dashboard.ejs', { path: 'dashboard'})
}

