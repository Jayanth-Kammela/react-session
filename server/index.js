require('dotenv').config()
const session = require('express-session')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginRouter = require('./routes/loginRoutes')

const app = express()


mongoose.connect('mongodb+srv://jayanth08:UCGojIdaVIZUlK4g@cluster0.vpir7jy.mongodb.net/Auth?retryWrites=true&w=majority')

app.use(
  session({
    secret: 'a1s2d3f4g5h6',
    name: 'session-id',
    cookie: {
      maxAge: 1000 * 60 * 60 * 1,
      sameSite: false,
      secure: false, 
    },
    resave: true,
    saveUninitialized: false,
  })
)

app.use(cors())
app.use(express.json())

app.use('/user', loginRouter)

app.listen(8086, () => {
  console.log('Server listening on port 8086')
})

module.exports = app
