const { Project, User } = require('../models')

const createProject = async (req, res) => {
   try {
      const project = await Project.create(req.body);
      return res.status(201).json({
         project,
      })
   } catch (error) {
      return res.status(500).json({error: error.message})
   }
}

const getAllProjects = async (req, res) => {
   try {
      const projects = await Project.findAll({
         include: [{
            model: User,
            as: 'createdBy'
         }]
      });
      return res.status(200).json({projects})
   } catch (error) {
      return res.status(500).send(error.mesage);
   }
};

module.exports = {
   createProject,
   getAllProjects
}