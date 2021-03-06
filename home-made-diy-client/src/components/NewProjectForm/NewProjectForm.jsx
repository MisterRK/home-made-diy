import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import './NewProjectForm.scss'

//component imports
import ProjectImagePreview from "./ProjectImagePreview/ProjectImagePreview";

//bootstrap imports
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewProjectForm = (props) => {
	const [projectInfo, setProjectInfo] = useState({
		title: "",
		description: "",
		projectImage: "",
	});

	const handleChange = (e) => {
		if (e.target.name === "projectImage") {
			try {
				setProjectInfo({
					...projectInfo,
					projectImage: URL.createObjectURL(e.target.files[0]),
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			setProjectInfo({
				...projectInfo,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let projectData = new FormData(e.target);
		axios({
			method: "post",
			url: "http://localhost:5000/api/projects",
			data: projectData,
		})
			// console.log(res)
			.then((res) => props.history.push(`/${res.data.project.id}/add-steps`))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Row className="header">
				<h2>Get Started with the Basics</h2>
			</Row>
			<Form encType="multipart/form-data" onSubmit={handleSubmit}>
				<Form.Group controlId="formGroupProjectTitle">
					<Form.Label>Project Title:</Form.Label>
					<Form.Control
						name="projectTitle"
						type="text"
						value={projectInfo.projectTitle}
						onChange={handleChange}
						placeholder="Project Title"
					/>
				</Form.Group>

				<Form.Group controlId="formGroupProjectDescription">
					<Form.Label>Project Description:</Form.Label>
					<Form.Control
						name="projectDescription"
						as="textarea"
						value={projectInfo.projectDescription}
						onChange={handleChange}
						rows={5}
						placeholder="Project Description"
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Add a Cover Photo for your Project</Form.Label>
					<Form.File
						name="projectImage"
						defaultValue=""
						onChange={handleChange}
					/>

					{projectInfo.projectImage !== "" ? (
						<ProjectImagePreview image={projectInfo.projectImage} />
					) : null}
				</Form.Group>

				<Button type="submit" variant="success">
					Submit
				</Button>
				<Button variant="danger">Cancel</Button>
			</Form>
		</Container>
	);
};

export default withRouter(NewProjectForm);
