const express = require('express')
const { Sequelize } = require('sequelize')
const users = express.Router()
const User = '../models/user.model.js'
const addJane = require('../models/user.model')

users.get('/', (req, res, next)=>{
   res.json({"message": "You're in the Users Router" })
})

users.get('/add', (req, res, next)=> {
   addJane()
})


module.exports = users