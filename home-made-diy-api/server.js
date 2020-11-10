const express = require('express')
const app = express()
const usersRouter = require('./routes/users.routes')
const projectsRouter = require('./routes/projects.routes')
const filesRouter = require('./routes/files.routes')
const stepsRouter = require('./routes/steps.routes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const Sequelize = require('sequelize')
const cors = require('cors')

const sequelize = new Sequelize('postgresql://localhost:5500')

sequelize.authenticate()
   .then(()=> {
      console.log("Connection to POSTGRES established")
   })
   .catch(err => console.log("An error occurred while connecting to the database"))
app.use(cors())
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json());

app.use('/api/users', usersRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/steps', stepsRouter)
app.use('/api/files', filesRouter)


app.listen(PORT, ()=> console.log("Server is Listening! Port: ", PORT)) 