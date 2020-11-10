const { Project, User, Step} = require("../models");

const createProject = async (req, res) => {
	try {
		const project = await Project.create({
			title: req.body.title,
			description: req.body.description,
			userId: req.body.userId,
			imageType: req.file.mimetype,
			imageName: req.file.originalname,
			imageData: req.file.buffer,
		})
		return res.status(201).json({ project });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllProjects = async (req, res) => {
	try {
		const projects = await Project.findAll({
			include: [
				{
					model: User,
					as: "createdBy",
				},
				{
					model: Step,
				}
			],
      })
      .then(projects => {
         projects.map(project => {
            const projectImage = project.imageData.toString('base64')
            project['imageData'] = projectImage
            }
         )
         return projects
      })
      .then(projects => {
         return res.status(200).json({projects: projects})
      })
	} catch (error) {
		return res.status(500).send(error.mesage);
	}
};

module.exports = {
	createProject,
	getAllProjects,
};
