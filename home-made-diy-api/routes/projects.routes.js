var express = require('express')
var projects = express.Router()

projects.get('/', (req, res, next)=>{
   res.json({"message": "You're in the Projects Router" })
})


module.exports = projects