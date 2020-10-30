const express = require('express')
const usersRouter = require('./routes/users.routes')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 5000

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json());

app.use('/api/users', usersRouter)


app.listen(PORT, ()=> console.log("Server is Listening! Port: ", PORT))