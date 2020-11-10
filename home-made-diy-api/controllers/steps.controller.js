const { Step } = require("../models")

const createStep = async (req, res) => {
   try {
      const step = await Step.create({
         title: req.body.title,
         content: req.body.content,
         order: req.body.order,
         projectId: req.body.projectId,
         imageType: req.file.mimetype,
			imageName: req.file.originalname,
			imageData: req.file.buffer,
      });
      return res.status(201).json({step})
   } catch ( error ) {
      return res.status(500).json({error: error.message})
   }
}

module.exports = {
   createStep
}