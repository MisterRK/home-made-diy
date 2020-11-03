const { File } = require('../models')
const stream = require('stream')
const { read } = require('fs')

const uploadFile = async (req, res) => {
   console.log("inside the uploadFile Method")
   try {
      const file = await File.create({
         type: req.file.mimetype,
         name: req.file.originalname,
         data: req.file.buffer
      })
      return res.status(201).json({file})
   } catch(err){
      return res.status(500).json({err: err.message})
   }
}

const downloadFileById = async (req, res) => {
   try {
      const { id } = req.params;
      const file = await File.findOne({
         where: {id: id}
      })
      if(file){
         const imgString = file.dataValues.data.toString('base64')
         return res.status(200).json({file: file, imgString: imgString})
      }
      return res.status(404).send("File with the specified ID does not exist")
   } catch (error) {
      console.log("error downloading file", error.message)
      res.status(500).json({error: error.message})
   }
}

const getAllFiles = async (req, res) => {
   try {
      const files = await File.findAll();
      return res.status(200).json({files})
   } catch (error) {
      return res.status(500).send(error.message)
   }
}

module.exports = {
   uploadFile,
   downloadFileById,
   getAllFiles
}