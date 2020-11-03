const { File } = require('../models')
const stream = require('stream')

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

const downloadFile = async (req, res) => {
   try {
      File.findById(req.params.id).then(file => {
         const fileContents = Buffer.from(file.data, "base64")
         const readStream = new stream.PassThrough();
         readStream.end(fileContents);

         res.set("Content-disposition", 'attachment; filename=', file.name);
         res.set('Content-Type', file.type)
         readStream.pipe(res)
      })
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
   downloadFile,
   getAllFiles
}