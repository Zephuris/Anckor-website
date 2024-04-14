const express = require('express')
const app = express()
require('dotenv').config();
var session = require('express-session')
const bodyParser = require('body-parser');

const path = require('path');
const port = process.env.PORT
const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth')
const generalRoutes = require('./routes/general')
require('./config/database').connect()

app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/views'));

// app.get('/', (req, res) => {
  //   res.send('Hello World!')
  // })
  
  
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, 'views')));
app.use(session({ secret: 'anckorTabs', cookie: { maxAge: 500000 }}))

app.use('/admin', adminRoutes)
app.use('/login', authRoutes)
// app.use('/', generalRoutes)
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/blog', (req, res) => {
  res.render('template/blog')
})

app.get('/test', (req, res) => {
    res.render('dashboard.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})