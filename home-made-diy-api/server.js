const express = require('express')
const usersRouter = require('./routes/users.routes')
const projectsRouter = require('./routes/projects.routes')
const bodyParser = require('body-parser')
const logger = require('morgan')

const PORT = process.env.PORT || 5000

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json());

app.use('/api/users', usersRouter)
app.use('/api/projects', projectsRouter)


app.listen(PORT, ()=> console.log("Server is Listening! Port: ", PORT))