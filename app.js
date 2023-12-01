const express = require('express')
const app = express()
require('dotenv').config();
const path = require('path');
const port = process.env.PORT
const adminRoutes = require('./routes/admin')
require('./config/database').connect()

app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/admin', adminRoutes)
app.get('/test', (req, res) => {
    res.render('dashboard.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})