const { Step, Project } = require('../models')

const createStep = async(req, res) => {
   try {
      const step = await Step.create(req.body);
      return res.status(201).json({
         step
      })
   } catch ( error ) {
      return res.status(500).json({error: error.message})
   }
}

module.exports = {
   createStep
}