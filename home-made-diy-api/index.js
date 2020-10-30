const express = require('express')
const app = express()
const Sequelize = require('sequelize')

//import routers
const projectsRouter = require('./routes/projects.routes')

const sequelize = new Sequelize('postgresql://localhost:5500')
sequelize.authenticate()
   .then(()=> {
      console.log("Connection to POSTGRES established")
   })
   .catch(err => console.log("An error occurred while connecting to the database"))

const port = 5000

app.use(express.json())
app.use('/projects', projectsRouter)

app.get('/', (req, res) => res.json({message: "Hello World"}));

app.listen(port, () => console.log('example app listening on port ' + port))