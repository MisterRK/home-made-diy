const { Project, User, Step} = require("../models");

const createProject = async (req, res) => {
	console.log(req.body)
	console.log(req.file)
	try {
		const project = await Project.create({
			title: req.body.projectTitle,
			description: req.body.projectDescription,
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

const getProjectById = async (req, res) => {
	try {
		const { id } = req.params;
		const project = await Project.findOne({
			where: {
				id: id
			},
			include: [
				{
					model: User,
					as: "createdBy"
				},
				{
					model: Step
				}
			]
		})
		.then(project => {
			// return res.status(200).send(project)	
			const projectImage = project.imageData.toString('base64')
			project['imageData'] = projectImage
			return project
		})
		.then(project => {
			if(project){
				return res.status(200).json({project: project})
			}
			throw new Error('project not found')
		})
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const deleteProjectById = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedProject = await Project.destroy({
			where: {id: id}
		});
		if(deletedProject){
			return res.status(204).send("project deleted")
		}
		throw new Error("project not found")
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	createProject,
	getAllProjects,
	getProjectById,
	deleteProjectById
};
