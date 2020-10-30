var express = require('express')
var users = express.Router()

users.get('/', (req, res, next)=>{
   res.json({"message": "You're in the Users Router" })
})


module.exports = users