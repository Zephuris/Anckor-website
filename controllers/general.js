const express = require('express');
const app = express();

exports.indexGet = (req, res, next) => {
    res.render('index/index.ejs', {
        
    })
}